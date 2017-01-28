import { Component, Input } from '@angular/core'
import { CoreUIConfig } from '../../coreui-config'

@Component({
  selector: 'coreui-layout',
  template: `
    <coreui-header  [config]="config.header">   </coreui-header>
    <coreui-sidebar [config]="config.sidebar">  </coreui-sidebar>
    <coreui-main    [config]="config.main">
      <ng-content></ng-content>
    </coreui-main>
    <coreui-footer  [config]="config.footer">   </coreui-footer>
`,
  styles: []
})
export class LayoutComponent {

  @Input() config: CoreUIConfig

}
