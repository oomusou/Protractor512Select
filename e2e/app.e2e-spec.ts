import { AppPage } from './app.po';

describe('protractor512-select App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it(`should have '1' select`, () => {
    expect(page.getSelect().isPresent()).toBe(true);
  });

  it(`should have '3' options in select`, () => {
    expect(page.getSelectCount()).toBe(3);
  });

  it(`should show '0' when selecting 'AWS'`, () => {
    page.selectCloudByIndex(0);
    expect(page.getSelectedId()).toBe('0');
  });

  it(`should show '1' when selecting 'Azure'`, () => {
    page.selectCloudByText('Azure');
    expect(page.getSelectedId()).toBe('1');
  });

  it(`should show '2' when selecting 'GCP'`, () => {
    page.selectCloudByText('GCP');
    expect(page.getSelectedId()).toBe('2');
  });
});
