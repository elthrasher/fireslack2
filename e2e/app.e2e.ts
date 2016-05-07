import { Fireslack2Page } from './app.po';

describe('fireslack2 App', function() {
  let page: Fireslack2Page;

  beforeEach(() => {
    page = new Fireslack2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fireslack2 works!');
  });
});
