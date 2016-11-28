import { Ng2NavbarPage } from './app.po';

describe('ng2-navbar App', function() {
  let page: Ng2NavbarPage;

  beforeEach(() => {
    page = new Ng2NavbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
