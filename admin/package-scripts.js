module.exports = {
  scripts: {
    dev: 'ng serve',
    lint: 'tslint "src/**/*.ts"',
    test: {
      default: 'ng test',
      e2e: {
        default: 'nps test.e2e.pre; protractor',
        pre: 'webdriver-manager update'
      }
    }
  }
};
