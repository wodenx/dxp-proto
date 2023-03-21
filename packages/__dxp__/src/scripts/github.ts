import axios, { AxiosResponse } from 'axios';
import type {
  GitApiInterface,
  GitApiProps,
  GitApiOptions,
  GitHubBranchProtectionData,
  GitHubBranchProtectionPayLoad,
  RestrictionData,
  Restriction,
  RequiredPullRequestReviews,
} from './types';

class GitHubApi implements GitApiInterface {
  private props: GitApiProps;

  private options: GitApiOptions;

  constructor(props: GitApiProps) {
    this.props = props;
    this.options = {
      baseURL: props.baseURL,
      headers: {
        Authorization: `token ${props.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      },
    };
  }

  /**
   * Create a pull request using GitHub REST API.
   *  https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#create-a-pull-request
   *
   * @param base string - base branch name
   * @param head string - source branch name
   * @returns Promise<number> - pull request number
   */
  async createPullRequest(base: string, head: string): Promise<number> {
    const { owner, repo, baseURL } = this.props;
    console.log(
      'Creating pull request...',
      `${baseURL}/repos/${owner}/${repo}/pulls`,
    );
    try {
      const {
        data: { number: pullNumber },
      } = await axios.post<any, AxiosResponse<any>>(
        `/repos/${owner}/${repo}/pulls`,
        {
          owner,
          repo,
          title: 'chore(content): publish updates',
          body: '',
          head,
          base,
        },
        this.options,
      );

      return await Promise.resolve(parseInt(pullNumber, 10));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async mergePullRequest(pullNumber: number): Promise<void> {
    const { owner, repo, baseURL } = this.props;
    try {
      await axios.put<any, AxiosResponse<any>>(
        `/repos/${owner}/${repo}/pulls/${pullNumber}/merge`,
        {
          owner,
          repo,
          pull_number: pullNumber,
          commit_title: `Merge pull request ${pullNumber}`,
          commit_message: 'Publish content',
        },
        this.options,
      );

      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteBranch(branchName: string): Promise<void> {
    const { owner, repo, baseURL } = this.props;
    try {
      await axios.delete<any, AxiosResponse<any>>(
        `/repos/${owner}/${repo}/git/refs/heads/${branchName}`,
        this.options,
      );
      console.log(`Deleted temporary publish branch: ${branchName}`);
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getBranchProtection(branchName: string): Promise<GitHubBranchProtectionData | false> {
    const { owner, repo, baseURL } = this.props;

    let protection: GitHubBranchProtectionData | false = false;
    try {
      const branchProtection = await axios.get<any, AxiosResponse<any>>(
        `/repos/${owner}/${repo}/branches/${branchName}/protection`,
        this.options,
      );
      const {url, ...$protection} = branchProtection.data;
      protection = $protection;
      return await Promise.resolve(protection);
    } catch (error) {
      if (error.response.status === 404) {
        console.log('Branch protection not found, continue with merging');
        return Promise.resolve(false);
      }
      return Promise.reject(error);
    }
  }

  async setBranchProtection(
    branchName: string,
    protection: GitHubBranchProtectionPayLoad
  ): Promise<GitHubBranchProtectionData> {
    const { owner, repo, baseURL } = this.props;

    try {
      await axios.put<any, AxiosResponse<any>>(
        `/repos/${owner}/${repo}/branches/${branchName}/protection`,
        {
          owner,
          repo,
          branch: branchName,
          ...protection,
        },
        this.options,
      );
      const data = await this.getBranchProtection(branchName);
      console.log('Protection added', data);
      if (data) {
        return await Promise.resolve(data);
      }
      return await Promise.reject(new Error('No branch protection found after creation'));
    } catch (error) {
      console.log('Failed to create branch protection: ',
        error.toJSON(), error.response.status);
      return Promise.reject(error);
    }
  }

  async removeBranchProtection(branchName: string): Promise<void> {
    const { owner, repo, baseURL } = this.props;

    try {
      const protection = await this.getBranchProtection(branchName);
      if (protection) {
        // remove protection
        await axios.delete<any, AxiosResponse<any>>(
          `/repos/${owner}/${repo}/branches/${branchName}/protection`,
          this.options,
        );
      } else {
        console.log(`Branch protection not found for branch: ${branchName}`);
      }
      return await Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Create GitHub branch protection API payload from the existing protection data.
  getBranchProtectionPayload = (
    protectionData: GitHubBranchProtectionData
  ): GitHubBranchProtectionPayLoad => {
    // Sample protect data:
    //
    // Protection {
    //   url: 'https://api.github.com/repos/[owner]/[repo]/branches/[branch]/protection',
    //   required_pull_request_reviews: {
    //     url: 'https://api.github.com/repos/.../protection/required_pull_request_reviews',
    //     dismiss_stale_reviews: false,
    //     require_code_owner_reviews: false,
    //     require_last_push_approval: false,
    //     required_approving_review_count: 4,
    //     dismissal_restrictions: {
    //       url: 'https://api.github.com/repos/.../protection/dismissal_restrictions',
    //       users_url: 'https://api.github.com/repos/.../protection/dismissal_restrictions/users',
    //       teams_url: 'https://api.github.com/repos/.../protection/dismissal_restrictions/teams',
    //       users: ['user1', 'user2', 'user3'],
    //       teams: [],
    //       apps: []
    //     }
    //   },
    //   required_signatures: {
    //     url: 'https://api.github.com/repos/.../protection/required_signatures',
    //     enabled: false
    //   },
    //   enforce_admins: {
    //     url: 'https://api.github.com/repos/.../protection/enforce_admins',
    //     enabled: false
    //   },
    //   required_linear_history: { enabled: true },
    //   allow_force_pushes: { enabled: true },
    //   allow_deletions: { enabled: false },
    //   block_creations: { enabled: false },
    //   required_conversation_resolution: { enabled: false },
    //   lock_branch: { enabled: false },
    //   allow_fork_syncing: { enabled: false }
    // }

    const {
      required_status_checks = null,
      enforce_admins,
      required_pull_request_reviews,
      restrictions,
      required_linear_history = { enabled: false },
      required_signatures = { enabled: false },
      allow_force_pushes = { enabled: false },
      allow_deletions = { enabled: false },
      block_creations = { enabled: false },
      required_conversation_resolution = { enabled: false },
      lock_branch = { enabled: false },
      allow_fork_syncing = { enabled: false },
    } = protectionData;

    const getRestriction = (restrictionData: RestrictionData): Restriction | null => {
      if (!restrictionData) {
        return null;
      }
      const { users, teams, apps = [] } = restrictionData;
      const users$ = users.map((user) => user.login);
      const teams$ = teams.map((team) => team.slug);
      const apps$ = apps.map((app) => app.slug);
      return {
        users: users$,
        teams: teams$,
        apps: apps$,
      };
    };

    const getChecks = (checks) => {
      if (!checks) {
        return null;
      }
      return {
        strict: !!checks.strict,
        contexts: checks.contexts || [],
      };
    };

    const getReviews = (reviews) => {
      if (!reviews) {
        return null;
      }
      const prReviews: RequiredPullRequestReviews = {
        dismiss_stale_reviews: reviews.dismiss_stale_reviews,
        require_code_owner_reviews: reviews.require_code_owner_reviews,
        require_last_push_approval: reviews.require_last_push_approval,
        required_approving_review_count: reviews.required_approving_review_count,
      };
      const dismissalRestrictions = getRestriction(reviews.dismissal_restrictions);
      if (dismissalRestrictions) {
        prReviews.dismissal_restrictions = dismissalRestrictions;
      }
      return prReviews;
    };

    // Param ref see:
    //  https://docs.github.com/en/rest/branches/branch-protection?apiVersion=2022-11-28#update-branch-protection

    const required_status_checks$ = getChecks(required_status_checks);
    const restrictions$ = getRestriction(restrictions);
    const required_pull_request_reviews$ = getReviews(required_pull_request_reviews);
    const required_signatures$ = required_signatures.enabled;
    const enforce_admins$ = enforce_admins.enabled;
    const required_linear_history$ = required_linear_history.enabled;
    const allow_force_pushes$ = allow_force_pushes.enabled;
    const allow_deletions$ = allow_deletions.enabled;
    const block_creations$ = block_creations.enabled;
    const required_conversation_resolution$ = required_conversation_resolution.enabled;
    const lock_branch$ = lock_branch.enabled;
    const allow_fork_syncing$ = allow_fork_syncing.enabled;

    const payload: GitHubBranchProtectionPayLoad = {
      required_status_checks: required_status_checks$,
      restrictions: restrictions$,
      required_pull_request_reviews: required_pull_request_reviews$,
      // boolean types:
      required_signatures: required_signatures$,
      enforce_admins: enforce_admins$,
      required_linear_history: required_linear_history$,
      allow_force_pushes: allow_force_pushes$,
      allow_deletions: allow_deletions$,
      block_creations: block_creations$,
      required_conversation_resolution: required_conversation_resolution$,
      lock_branch: lock_branch$,
      allow_fork_syncing: allow_fork_syncing$,
    };

    return payload;
  };
}

export {
  GitHubApi
};
