import { Exo2AngularPage } from './app.po';

describe('exo2-angular App', () => {
  let page: Exo2AngularPage;

  beforeEach(() => {
    page = new Exo2AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
