import { Component, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'ui-card',
  template: `
    <div class="ui-card card {{classNames}}">
      <div *ngIf="hasHeader" #cardHeader class="card-header">
        <ng-content select="ui-card-header"></ng-content>
      </div>
      <div *ngIf="hasContent" #cardContent class="card-block">
        <ng-content select="ui-card-content"></ng-content>
      </div>
      <div *ngIf="!hasContent">
        <ng-content></ng-content>
      </div>
      <div *ngIf="hasFooter" #cardFooter class="card-footer">
        <ng-content select="ui-card-footer?"></ng-content>
      </div>
    </div>
`
})
export class UiCardComponent implements AfterViewInit {
  // By default display all the parts of the card
  hasContent: boolean = true
  hasFooter: boolean = true
  hasHeader: boolean = true

  // Get a reference to the different sections
  @ViewChild('cardContent') cardContent
  @ViewChild('cardFooter') cardFooter
  @ViewChild('cardHeader') cardHeader

  // Add additional classNames to a card
  @Input() classNames = ''

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  // Determine visibility based on existence of child sections
  ngAfterViewInit() {
    this.hasContent = this.cardContent.nativeElement.querySelector('ui-card-content')
    this.hasHeader = this.cardHeader.nativeElement.querySelector('ui-card-header')
    this.hasFooter = this.cardFooter.nativeElement.querySelector('ui-card-footer')
    this._changeDetectorRef.detectChanges()
  }
}

// The cards work without these three classes. These are defined merely to have the IDE's know about them
@Component({
  selector: 'ui-card-header',
  template: `<ng-content></ng-content>`
})
export class UiCardHeaderComponent {}

@Component({
  selector: 'ui-card-content',
  template: `<ng-content></ng-content>`
})
export class UiCardContentComponent {}

@Component({
  selector: 'ui-card-footer',
  template: `<ng-content></ng-content>`
})
export class UiCardFooterComponent {}
