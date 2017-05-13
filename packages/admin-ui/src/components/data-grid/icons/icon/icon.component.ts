import { Component, EventEmitter, Input, Output, ElementRef, TemplateRef } from '@angular/core'

@Component({
  selector: 'ui-data-grid-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {

  @Input() public item: any
  @Input() public template: TemplateRef<any>
  @Output() action = new EventEmitter()

  constructor(private elementRef: ElementRef) { }

}
