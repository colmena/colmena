import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core'

@Component({
  selector: 'fc-data-grid-icons',
  templateUrl: './icons.component.html',
})
export class IconsComponent {
  @Input() public template: TemplateRef<any>
  @Input() public items: any[]
  @Input() public selectedItems: any[]
  @Output() selectItem = new EventEmitter()
}
