import { browser, by, element } from 'protractor';

export class Header {

  static login() {
    const button = element(by.css('ev-header button'));
    button.click();
  }
}
