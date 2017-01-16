'use strict'

const clientSrc = './src'
const serverSrc = '../api/server/server.js'

module.exports = {
  scripts: {
    clean: {
      script: 'rimraf ./dist',
      description: 'Remove client build artifacts',
    },
    build: {
      default: {
        script: 'nps clean,build.ngbuild',
        description: 'Build the client distribution',
      },
      ngbuild: {
        script: 'ng build --output-path ./dist',
        description: 'Build client dist using ng build',
      },
    },
    dev: {
      script: 'ng serve --port 9000 --host 0.0.0.0 --progress false --hmr -e=hmr',
      description: 'Serve the client app in development mode',
    },
    lint: {
      script: `tslint -e "${clientSrc}/lib/**/*.ts" "${clientSrc}/**/*.ts"`,
      description: 'Lint TypeScript code',
    },
    lbSDK: {
      description: 'Build the LoopBack SDK',
      script: `NODE_ENV=codegen lb-sdk --wipe enabled ${serverSrc} ${clientSrc}/lib/lb-sdk`,
    },
    test: {
      default: {
        script: 'nps client.test.e2e.install,client.test.e2e,client.test.unit',
        description: 'Run the full client test suite',
      },
      e2e: {
        default: {
          script: 'protractor',
          description: 'Run protractor e2e tests',
        },
        install: {
          script: 'webdriver-manager update --standalone false --gecko false',
          description: 'Update WebDriver',
        },
      },
      unit: {
        default: {
          script: 'ng test --watch false --code-coverage',
          description: 'Run the unit tests with code coverage (single run)',
        },
        watch: {
          script: 'ng test',
          description: 'Run the unit tests in watch-mode',
        },
      },
    },
  },
}
