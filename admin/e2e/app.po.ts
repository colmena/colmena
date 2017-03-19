import { browser, element, by } from 'protractor'

export class ColmenaAngularPage {
  getCurrentUrl() {
    return browser.driver.getCurrentUrl();
  }

  navigateTo() {
    return browser.get('/');
  }

  get() {
    return element(by.css('app-root h1')).getText();
  }
}
