import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";
import { Detail } from "../features/detail.page";
import { Header } from "../features/header.page";
import { HomePage } from "../features/home.page";

describe('testing home navigations', () => {
  const home = new HomePage();
  const EC = protractor.ExpectedConditions;

  it('should search breeds and show results', () => {
    // given
    home.navigateTo();

    // when
    home.typeOnSearch('mun');
    browser.wait(EC.presenceOf(home.getResultElement()), 5000);

    // then
    const result = home.getResultElement();
    expect(result.getText()).toBe('Munchkin');
  });

  it('shouldnt navigate if not logged', async () => {
    // given
    home.navigateTo();

    // when
    home.typeOnSearch('mun');
    browser.wait(EC.presenceOf(home.getResultElement()), 5000);

    // then
    const result = home.getResultElement();
    await result.click();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
  });


  it('should navigate if  logged', async () => {
    // given
    home.navigateTo();

    // when
    home.typeOnSearch('mun');
    browser.wait(EC.presenceOf(home.getResultElement()), 5000);

    // then
    Header.login();
    const result = home.getResultElement();
    await result.click();
    await browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain(Detail.url);
  });
});