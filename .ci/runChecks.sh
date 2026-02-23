set -e

npm ci
npm run build:node
npm run lint:eslint
npm run lint:prettier
npx license-check
npx better-npm-audit audit --exclude 1113371
