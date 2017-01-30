import { NwHikesPage } from './app.po';

describe('nw-hikes App', function() {
  let page: NwHikesPage;

  beforeEach(() => {
    page = new NwHikesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
