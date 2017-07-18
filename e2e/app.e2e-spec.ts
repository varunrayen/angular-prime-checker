import { PrimeNumberPage } from './app.po';

describe('prime-number App', () => {
  let page: PrimeNumberPage;

  beforeEach(() => {
    page = new PrimeNumberPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
