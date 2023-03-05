#!/bin/bash
echo Postinstall on $(date) $(pwd)
# ls node_modules/*
# echo root node modules...
# ls 'node_modules/*'
# echo site node modules...
# ls '@sites/__dxp__/node_modules/*'
# npm run build:packages

echo Building env vars...
CURRENT=$(pwd)
cd sites/__dxp__
npm run build:env-vars
cat .env.production | grep SITE_URL
cd $CURRENT

echo Building package...
cd packages/__dxp__
npm run build
cd $CURRENT