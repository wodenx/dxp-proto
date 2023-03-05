#!/bin/bash
echo Postinstall on $(date) $(pwd)

echo Building env vars...
npm run build:env-vars --workspace @sites/--dxp--

echo Building package...
npm run build:packages
