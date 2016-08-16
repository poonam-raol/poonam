import { PoonamAppPage } from './app.po';

describe('poonam-app App', function() {
  let page: PoonamAppPage;

  beforeEach(() => {
    page = new PoonamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
