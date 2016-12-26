import { Component, Input, OnInit } from '@angular/core'
// TODO add if key, determine if the row buttons show based on condition
@Component({
  selector: 'fc-buttons',
  template: `
    <div class="{{groupClass}}" dropdown>
      <button *ngFor="let button of mainButtons" type="button" class="{{button.classes || btnClass }}" (click)="button.click(item)">
        <i *ngIf="button.icon" class="{{button.icon}}"></i>
        {{button.label}}
      </button>
      <button *ngIf="hasSub" type="button" class="dropdown-toggle {{btnClass}}" dropdownToggle data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
        <i *ngIf="subIcon" class="{{subIcon}}"></i>
        <span *ngIf="subLabel">{{subLabel}}</span>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div *ngIf="hasSub" class="dropdown-menu dropdown-menu-right" dropdownMenu>
        <button *ngFor="let button of subButtons" type="button" class="dropdown-item" (click)="button.click(item)">
          <i *ngIf="button.icon" class="{{button.icon}}"></i>
          {{button.label}}
        </button>
      </div>
    </div>
`,
styles: [`
  .btn-group-sm .btn-sm.btn-social, 
  .btn-group-vertical-sm .btn-sm.btn-social {
    padding-left: 35px;
  }
  .btn-group .btn-social, 
  .btn-group-vertical .btn-social {
    padding-left: 45px;
  }
  .btn-group-lg .btn-lg.btn-social, 
  .btn-group-vertical-lg .btn-lg.btn-social{
    padding-left: 60px;
  }
`]
})
export class FcButtonsComponent implements OnInit {

  btnClass: string = 'btn btn-secondary'
  groupClass: string = 'btn-group'

  mainButtons: any[] = []
  subButtons: any[] = []

  subIcon: string
  subLabel: string

  hasMain: boolean = true
  hasSub: boolean = true

  @Input() config: any = {}
  @Input() item: any = {}

  ngOnInit() {
    // Get the buttons
    const buttons = this.config.buttons || []
    const buttonLength = buttons.length

    // Make sure we have more buttons in the array than overflow
    const overflow: number = this.config.overflow || 0
    const hasOverflow: boolean = overflow > 0 && buttonLength > overflow

    // Divide the buttons if we have determined an overflow
    if (hasOverflow) {
      // Get the main buttons
      for (let i = 0; i < overflow; i++) {
        this.mainButtons.push(buttons[i])
      }
      // Get the sub buttons
      for (let i = overflow; i < buttonLength; i++) {
        this.subButtons.push(buttons[i])
      }
    } else {
      this.mainButtons = buttons
    }

    // Set the toggles from main and sub
    this.hasMain = this.mainButtons.length > 0
    this.hasSub = this.subButtons.length > 0

    // Set the icon and label for the sub dropdown, if any
    this.subIcon = this.config.subIcon || null
    this.subLabel = this.config.subLabel || null

    // Set the default style, if any
    this.btnClass = this.config.btnClass || this.btnClass

    // Override the group class in case of a vertical group
    if (this.config.vertical) {
      this.groupClass = 'btn-group-vertical'
    }

    // Set the size, if any
    this.groupClass = this.config.size ? `${this.groupClass} ${this.groupClass}-${this.config.size}` : this.groupClass
  }
}
