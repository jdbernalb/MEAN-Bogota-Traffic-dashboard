import { TESISPage } from './app.po';

describe('tesis App', () => {
  let page: TESISPage;

  beforeEach(() => {
    page = new TESISPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
