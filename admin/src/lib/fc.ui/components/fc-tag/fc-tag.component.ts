import { Component, Input, OnInit } from '@angular/core'

// TODO: Make sure that the 'type' input accepts only one of these values
enum tagTypes {
  'danger',
  'default',
  'info',
  'primary',
  'success',
  'warning',
}

@Component({
  selector: 'fc-tag',
  template: `
<span class="{{classList}}">
  <ng-content></ng-content>
</span>
`
})
export class FcTagComponent implements OnInit {

  private classList: string = 'tag'

  @Input() pill: boolean = false
  @Input() type: string = 'default'

  ngOnInit() {
    if (this.pill) {
      this.classList += ' tag-pill'
    }
    this.classList += ' tag-' + this.type
  }
}
