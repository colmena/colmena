import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core'

@Component({
  selector: 'ui-data-grid-icons',
  templateUrl: './icons.component.html',
})
export class IconsComponent {
  @Input() public template: TemplateRef<any>
  @Input() public items: any[]
  @Output() action = new EventEmitter()
}
