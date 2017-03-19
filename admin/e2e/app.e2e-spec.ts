import { ColmenaAngularPage } from './app.po'

describe('colmena-angular App', function() {
  let page: ColmenaAngularPage;

  beforeEach(() => {
    page = new ColmenaAngularPage()
  });

  it('should render login page', function() {
    page.navigateTo();
    expect(page.getCurrentUrl()).toMatch('/login');
  });
});
