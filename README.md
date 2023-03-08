# __dxp__

## Quick Start

`npm i && npm run build && npm run serve`

## Deployment

### Vercel
Import the git repo and provide the following settings:
- Framework Preset: `Other`
- Build command `npm run build`
- Install command `npm ci --prefix ../..`
- Root Directory `sites/__dxp__`
- Output Directory: `./public`

### Gatsby Cloud
Import the github repo and provide the following setting:
- Gatsby Root Folder: `sites/__dxp__`

> Note that Gatsby will scan `gatsby-config.js` and suggest that you set some
> environment variables. These must be removed from the "Environment Variables"
> section. Not removing them will cause them to have empty values which override
> the actual values from `.env.site`.

### Stackbit
Import the github repo