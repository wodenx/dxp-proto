# __dxp__


## Deployment

### Vercel
Import the git repo and provide the following settings:
- Framework Preset: `Other`
- Build command `cd ../.. && npm run build`
- Install command `cd ../.. && npm install`
-  Root Directory `sites/__dxp__`
- Output Directory: `public`

### Gatsby Cloud
Import the github repo and provide the following setting:
- Base directory: `sites/__dxp__`
Note that Gatsby will scan `gatsby-config.js` and suggest that you set
some environment variables.  These must be removed (they are set in .env.site).  Not removing them will cause them to have empty values and break
the build.

### Stackbit
Import the github repo