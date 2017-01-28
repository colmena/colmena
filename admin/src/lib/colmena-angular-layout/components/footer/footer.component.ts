import { Component, Input } from '@angular/core'
import { LayoutConfigFooter } from '../../layout-config'

@Component({
  selector: 'layout-footer',
  template: `
    <footer class="footer">
        <span class="text-left" [innerHtml]="config.left"></span>
        <span class="float-xs-right" [innerHtml]="config.right"></span>
    </footer>
  `,
})
export class FooterComponent {

  @Input() config: LayoutConfigFooter

}
