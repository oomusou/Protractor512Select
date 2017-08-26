import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSelect(): ElementFinder {
    return element(by.id('TDDSelect'));
  }

  getSelectCount(): any {
    return element(by.id('TDDSelect'))
      .all(by.tagName('option'))
      .count();
  }

  selectCloudByIndex(index: number): AppPage {
    element(by.id('TDDSelect'))
      .all(by.tagName('option'))
      .get(index)
      .click();

    return this;
  }

  selectCloudByText(text: string): AppPage {
    element(by.id('TDDSelect'))
      .element(by.cssContainingText('option', text))
      .click();

    return this;
  }

  getSelectedId(): any {
    return element(by.css('p')).getText();
  }
}
