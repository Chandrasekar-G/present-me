import { PresentMePage } from './app.po';

describe('present-me App', () => {
  let page: PresentMePage;

  beforeEach(() => {
    page = new PresentMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Present Me!!');
  });
});
