const liveSiteURL = process.env.LIVE_SITE_URL? [{
  label: 'View Live Site',
  type: 'link',
  icon: 'external-link',
  url: process.env.LIVE_SITE_URL,
}] : [];

export default {
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  cmsName: 'git',
  devCommand: 'npm run dev',
  nodeVersion: '16',
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
