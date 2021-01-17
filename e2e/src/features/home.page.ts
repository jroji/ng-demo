import { browser, by, element } from 'protractor';

export class HomePage {
  async navigateTo() {
    return await browser.get(browser.baseUrl);
  }

  getSearchElement() {
    return element(by.css('input'));
  }

  getResultElement() {
    return element(by.css('.list .result'));
  }

  typeOnSearch(text: string) {
    const searchElement = this.getSearchElement();
    searchElement.sendKeys(text);
  }
}
