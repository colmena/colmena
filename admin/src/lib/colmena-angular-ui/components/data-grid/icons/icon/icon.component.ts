import { Component, EventEmitter, Input, OnInit, Output, ElementRef, TemplateRef } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

@Component({
  selector: 'ui-data-grid-icon',
  templateUrl: './icon.component.html',
  styleUrls: [ './icon.component.scss' ],
})
export class IconComponent implements OnInit {

  @Input() public item: any
  @Input() public template: TemplateRef<any>
  @Output() selectItem = new EventEmitter()

  public selected = false

  constructor(
    private elementRef: ElementRef,
  ) {

  }

  ngOnInit() {
    const click$ = Observable.fromEvent(this.elementRef.nativeElement, 'click')

    click$
      .buffer(click$.debounce((() => Observable.timer(300))))
      .map(clicksWithing300ms => clicksWithing300ms.length)
      .subscribe(event => {
          if (event === 1) {
            this.clickItem()
          }
          if (event === 2) {
            this.dblclickItem()
          }
        }
      )
  }


  clickItem() {
    this.selected = !this.selected
    this.selectItem.emit({
      action: 'select',
      item: this.item,
    })
  }

  dblclickItem() {
    this.selectItem.emit({
      action: 'activate',
      item: this.item,
    })
  }

}
