import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'layout-footer',
  template: `
    <footer class="footer">
      <span class="text-left" [innerHtml]="footerLeft"></span>
      <span class="float-xs-right" [innerHtml]="footerRight"></span>
    </footer>
  `,
})
export class FooterComponent {

  public footerLeft = ''
  public footerRight = ''

  constructor(private store: Store<any>) {
    this.store
      .select('layout')
      .subscribe((res: any) => {
        this.footerLeft = res.footerLeft
        this.footerRight = res.footerRight
      })
  }
}
