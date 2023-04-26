// @todo determine best way to distribute the shared config.
/* eslint import/no-extraneous-dependencies: 0 */
import { GitContentSource } from '@stackbit/cms-git';
import path from 'path';

// @todo Models need to be CommonJS.  Currently using the strategy of 2 separate
// tsconfigs (see tsconfig.cjs.json), and models are specified by name.  We need
// a better way to compile the models to cjs but keep them close to the components
// with which they are associated.
// @todo figure out best way to share config.
import GenericTemplateModel from '@kenvue/dxp-components/lib/stackbit/EditorPlain/model';
import EditorPlainModel from '@kenvue/dxp-components/lib/stackbit/GenericTemplate/model';
import FooterModel from '@kenvue/dxp-components/lib/stackbit/Footer/model';
import LayoutModel from '@kenvue/dxp-components/lib/stackbit/Layout/model';
// @todo: When we have only a single component exported from the package
// TS generates a slightly different lib structure.
// Change to match other imports once more components are added.
import ImageModel from '@kenvue/dxp-image/lib/stackbit';
import SimpleMenu from '@kenvue/dxp-components/lib/stackbit/Menu/model';
import MenuTitle from '@kenvue/dxp-components/lib/stackbit/MenuTitle/model';
import SubMenu from '@kenvue/dxp-components/lib/stackbit/SubMenu/model';
import Curator from '@kenvue/dxp-curator/lib/stackbit';

const liveSiteURL = process.env.LIVE_SITE_URL? [{
  label: 'View Live Site',
  type: 'link',
  icon: 'external-link',
  url: process.env.LIVE_SITE_URL,
}] : [];

export default {
  installCommand: 'cd ../../ && npm install',
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  customContentReload: true,
  // cmsName: 'git',
  devCommand: 'npm run edit',
  // devCommand: 'npm run dev',
  nodeVersion: '16',
  contentSources: [
    new GitContentSource({
      // @todo how to make this generic?
      // @todo Test in studio after sb releases fix, see https://stackbit.zendesk.com/hc/en-us/requests/84?page=1
      rootPath: path.join(__dirname),
      contentDirs: ['src/data'],
      // repoUrl: process.env.REPO_URL || '',
      // repoBranch: process.env.REPO_BRANCH || '',
      models: [
        GenericTemplateModel,
        EditorPlainModel,
        FooterModel,
        LayoutModel,
        SimpleMenu,
        MenuTitle,
        SubMenu,
        ImageModel,
        Curator,
      ],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'static',
        uploadDir: 'images',
        publicPath: '/',
      },
    }),
  ],
  experimental: {
    ssg: {
      name: 'Gatsby',
      logPatterns: {
        up: 'You can now view',
      },
    },
  },
  sidebarButtons: [
    ...liveSiteURL
  ]
};
