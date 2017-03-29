import { PrimeiroPythonDayCaicoPage } from './app.po';

describe('primeiro-python-day-caico App', () => {
  let page: PrimeiroPythonDayCaicoPage;

  beforeEach(() => {
    page = new PrimeiroPythonDayCaicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
