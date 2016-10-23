'use strict';

module.exports = {
  scripts: {
    dev: 'NODE_ENV=development nodemon server/server.js --watch common --watch server --ext js,json',
    build: {
      sdk: './node_modules/.bin/lb-sdk server/server ../admin/src/app/shared/sdk',
    },
    lint: 'eslint .',
    default: 'node .',
    posttest: 'npm run lint && nsp check',
    test: 'true',
  },
};
