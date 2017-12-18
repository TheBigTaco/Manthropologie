import { ManthropologiePage } from './app.po';

describe('manthropologie App', () => {
  let page: ManthropologiePage;

  beforeEach(() => {
    page = new ManthropologiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
