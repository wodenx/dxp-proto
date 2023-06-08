/**
 * This script can be used to commit and push published content from data sources like Contentful.
 *
 * How to use:
 *  - Manually invoke.
 *      Commands
 *        ./bin/content-publish --base=main --script="npm run build contentful-update"
 *
 *      Options
 *        -b, --base      Specify merge base branch name, e.g. `base-branch-name`
 *                        (defaults to `main`, or `CONTENT_PUBLISH_BASE_BRANCH` env variable)
 *        -s, --script    Specify the script to run for content update from project root,
 *                        e.g. `npm build contentful-update`.
 *        -m, --message   Specify the commit message.
 *        -p, --path      Specify the path to the content directory to commit.
 *
 * Notes:
 * - use web url for working repo clone:
 *    > https://github.com/dxp-prototype/dxp-proto.git
 *
 * - Env variables:
 *    > CONTENT_PUBLISH_GIT_USERNAME
 *    > CONTENT_PUBLISH_GIT_PASSWORD
 *    > CONTENT_PUBLISH_AUTHOR_NAME
 *    > CONTENT_PUBLISH_AUTHOR_EMAIL
 *    > CONTENT_PUBLISH_BASE_BRANCH
 */
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import yargs from 'yargs';
import * as fs from 'fs';
import * as os from 'os';
import { resolve } from 'path';
import { v4 as uuid } from 'uuid';
import { execSync } from 'child_process';
import { GitHubApi } from './github';
import type { ContentCommitProps } from './types';

const DEFAULT_BASE_BRANCH = 'main';
const REPO_API_BASE_URL = 'https://api.github.com/';

const getGitWebUrl = (url: string) => {
  // accepts https://...(.git)? or git@...:.git
  if (/^https:\/\/(.+)(\.git)?$/i.test(url)) {
    return url;
  }
  const match = url.match(/^git@(.+):(.+)\.git$/);
  if (!match) {
    throw new Error(`Invalid git url: ${url}`);
  }
  return `https://${match[1]}/${match[2]}.git`;
};
const getRepoInfo = (url: string): {
  owner: string;
  repo: string;
} => {
  const gitMatch = url.match(/^git@(.+):(.+)\.git$/);
  if (!gitMatch) {
    // eslint-disable-next-line no-useless-escape
    const httpsMatch = url.match(/^https:\/\/([^\/]+)\/([^\/]+)\/([^\.]+)(\.git)?$/i);
    if (!httpsMatch) {
      throw new Error(`Invalid git url: ${url}`);
    }
    console.log('httpsMatch: ', httpsMatch);
    return {
      owner: httpsMatch[2],
      repo: httpsMatch[3],
    };
  }
  console.log('gitMatch: ', gitMatch);
  return {
    owner: gitMatch[2],
    repo: gitMatch[3],
  };
};

const getGitCredentials = () => ({
  username: process.env.CONTENT_PUBLISH_GIT_USERNAME || '',
  password: process.env.CONTENT_PUBLISH_GIT_PASSWORD || '',
});

const validateInput = async (props: ContentCommitProps) => {
  const {
    base,
    script,
    gitUrl: url,
    gitUsername,
    gitPassword,
  } = props;

  if (!base) {
    throw new Error('Missing "base" branch name.');
  }
  if (!url) {
    throw new Error('Missing repo "url".');
  }
  if (!gitUsername) {
    throw new Error('Missing git "CONTENT_PUBLISH_GIT_USERNAME" from env variable.');
  }
  if (!gitPassword) {
    throw new Error('Missing git "CONTENT_PUBLISH_GIT_PASSWORD" from env variable.');
  }

  if (!script) {
    throw new Error('Missing content update "script".');
  }

  const refs = await git.listServerRefs({
    http,
    url,
    prefix: 'refs/heads/',
    onAuth: () => ({
      username: gitUsername,
      password: gitPassword,
    }),
  });

  const baseRef = refs.find((r) => r.ref.replace('refs/heads/', '') === base);

  if (!baseRef) {
    throw new Error(`Base branch name: ${base} does not exist.`);
  }

  return true;
};

// Commit content updates from a temp checkout.
const contentCommit = async (props: ContentCommitProps): Promise<void> => {
  const {
    base,
    script,
    path: contentPath$,
    message: commitMessage,
    gitUrl,
    gitUsername,
    gitPassword,
  } = props;
  try {
    const authorName = process.env.CONTENT_PUBLISH_AUTHOR_NAME || 'dxp-proto';
    const authorEmail = process.env.CONTENT_PUBLISH_AUTHOR_EMAIL || 'dxp-proto@kenvue.com';
    const workingPath = process.cwd();
    const {
      owner,
      repo,
    } = getRepoInfo(gitUrl);
    const date = new Date();
    const dateName = `${date.getFullYear()}${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
    const dateStamp = date.valueOf();
    const contentPublishBranch = `content-publish-${dateName}-${dateStamp}`;

    await git.branch({
      fs,
      dir: workingPath,
      ref: contentPublishBranch,
      checkout: true,
    });
    console.log('Checkout branch: ', contentPublishBranch);

    const cmd = `${script}`;
    try {
      console.log(`Starting - ${script}`);
      execSync(cmd, {
        cwd: workingPath,
        encoding: 'utf8',
        stdio: 'pipe',
      });
      console.log('npm install && npm run build completed');
    } catch (execError) {
      throw new Error(`Install and build error: ${execError.stderr}`);
    }

    // find modified files.
    // ref: https://isomorphic-git.org/docs/en/statusMatrix.html
    enum StatusEnum {
      FILE,
      HEAD,
      WORKDIR,
      STAGE,
    }

    // const contentPath = resolve(workingPath, contentPath$);
    const modifiedFiles = (
      await git.statusMatrix({
        fs,
        dir: workingPath,
        filepaths: [contentPath$],
      })
    )
      .filter((result) => {
        const head = result[StatusEnum.HEAD];
        const workDir = result[StatusEnum.WORKDIR];
        const staged = result[StatusEnum.STAGE];
        // ignore unmodified files.
        return !(head === 1 && workDir === 1 && staged === 1);
      })
      .map((result) => ({
        filePath: result[StatusEnum.FILE],
        status: result[StatusEnum.WORKDIR],
      }));
    if (!modifiedFiles.length) {
      console.log('No changes to commit.');
      return;
    }
    console.log('Modified files: ', modifiedFiles);

    // commit changes.
    try {
      modifiedFiles.forEach(async (file) => {
        const { filePath, status } = file;
        if (status) {
          await git.add({
            fs,
            dir: workingPath,
            filepath: filePath,
          });
          console.log(`Git add ${filePath}`);
        } else {
          await git.remove({
            fs,
            dir: workingPath,
            filepath: filePath,
          });
          console.log(`Git remove ${filePath}`);
        }
      });
      const sha = await git.commit({
        fs,
        dir: workingPath,
        author: {
          name: authorName,
          email: authorEmail,
        },
        message: commitMessage,
      });
      console.log('Committed modified files: ', sha, modifiedFiles);
    } catch (error) {
      console.log('Failed to commit modified files: ', error, modifiedFiles);
      throw new Error(error);
    }

    // push changes.
    try {
      await git.push({
        fs,
        http,
        dir: workingPath,
        remote: 'origin',
        url: gitUrl,
        ref: contentPublishBranch,
        onAuth: () => ({
          username: gitUsername,
          password: gitPassword,
        }),
      });
      console.log('Pushed changes to remote.', contentPublishBranch);
    } catch (error) {
      console.log('Failed to push changes: ', error);
      throw new Error(error);
    }

    // Call Git Vender API to create pull request and merge to base branch.
    const githubApiProps = {
      owner,
      repo,
      baseURL: REPO_API_BASE_URL,
      token: gitPassword,
    };
    const gitHubApi = new GitHubApi(githubApiProps);
    const pullNumber = await gitHubApi.createPullRequest(
      base,
      contentPublishBranch,
    );

    if (!pullNumber) {
      throw new Error('Failed to retrieve content publish PR number.');
    }
    const branchProtectionData = await gitHubApi.getBranchProtection(base);
    if (branchProtectionData) {
      // remove protection
      await gitHubApi.removeBranchProtection(base);
    }

    try {
      // Merge pull request.
      await gitHubApi.mergePullRequest(pullNumber);
    } catch (error: any) {
      console.log('Failed to merge PR', error);
      // restore protection if merge failed.
      if (branchProtectionData) {
        console.log('Adding branch protection back');
        const branchProtectionPayLoad = gitHubApi.getBranchProtectionPayload(branchProtectionData);
        await gitHubApi.setBranchProtection(base, branchProtectionPayLoad);
      }
      throw new Error(error);
    }

    // restore protection if protection was removed.
    if (branchProtectionData) {
      const branchProtectionPayLoad = gitHubApi.getBranchProtectionPayload(branchProtectionData);
      await gitHubApi.setBranchProtection(base, branchProtectionPayLoad);
    }

    // Delete the temporary content publish branch.
    await gitHubApi.deleteBranch(contentPublishBranch);
  } catch (error: any) {
    console.log('Failed to publish updates: ', error);
    throw new Error(error);
  }
};

const start = async () => {
  try {
    const {
      base, script, message, path
    } = yargs(process.argv.slice(2))
      .usage('Usage: $0 <command> [options]')
      .options({
        base: { type: 'string', default: '', alias: 'b' },
        script: { type: 'string', default: 'echo', alias: 's' },
        message: { type: 'string', default: 'Product publish', alias: 'm' },
        path: { type: 'string', default: '', alias: 'p' },
      })
      .parseSync();
    const { username, password } = getGitCredentials();
    const gitRoot = await git.findRoot({
      fs,
      filepath: process.cwd(),
    });
    const remotes = await git.listRemotes({ fs, dir: gitRoot });
    const origin = remotes.find((r) => r.remote === 'origin');

    if (!origin) {
      throw new Error('No remote origin found.');
    }
    const { url } = origin;

    const base$ = base || process.env.CONTENT_PUBLISH_BASE_BRANCH || DEFAULT_BASE_BRANCH;

    const props = {
      base: base$,
      script,
      message,
      path,
      gitUrl: getGitWebUrl(url),
      gitUsername: username,
      gitPassword: password,
    };
    if (await validateInput(props)) {
      contentCommit(props);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
