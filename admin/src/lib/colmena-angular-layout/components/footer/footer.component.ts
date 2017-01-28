import { Component, Input } from '@angular/core'
import { CoreUIConfigFooter } from '../../coreui-config'

@Component({
  selector: 'coreui-footer',
  template: `
    <footer class="footer">
        <span class="text-left" [innerHtml]="config.left"></span>
        <span class="float-xs-right" [innerHtml]="config.right"></span>
    </footer>
  `,
})
export class FooterComponent {

  @Input() config: CoreUIConfigFooter

}
