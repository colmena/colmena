import { ColmenaAngularPage } from './app.po'

describe('colmena-angular App', function() {
  let page: ColmenaAngularPage

  beforeEach(() => {
    page = new ColmenaAngularPage()
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('app works!')
  })
})
