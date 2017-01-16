import { Component, ViewChild, AfterViewInit } from '@angular/core'

@Component({
  selector: 'fc-card',
  template: `
<div class="fc-card card">

  <div *ngIf="hasHeader" #cardHeader class="card-header">
    <ng-content select="fc-card-header"></ng-content>
  </div>

  <div *ngIf="hasContent" #cardContent class="card-block">
    <ng-content select="fc-card-content"></ng-content>
  </div>

  <div *ngIf="!hasContent">
    <ng-content></ng-content>
  </div>
  
  <div *ngIf="hasFooter" #cardFooter class="card-footer">
    <ng-content select="fc-card-footer?"></ng-content>
  </div>
</div>
`
})
export class FcCardComponent implements AfterViewInit {
  // By default display all the parts of the card
  hasContent: boolean = true
  hasFooter: boolean = true
  hasHeader: boolean = true

  // Get a reference to the different sections
  @ViewChild('cardContent') cardContent
  @ViewChild('cardFooter') cardFooter
  @ViewChild('cardHeader') cardHeader

  // Determine visibility based on existence of child sections
  ngAfterViewInit() {
    this.hasContent = this.cardContent.nativeElement.querySelector('fc-card-content')
    this.hasHeader = this.cardHeader.nativeElement.querySelector('fc-card-header')
    this.hasFooter = this.cardFooter.nativeElement.querySelector('fc-card-footer')
  }
}

// The cards work without these three classes. These are defined merely to have the IDE's know about them
@Component({
  selector: 'fc-card-header',
  template: `<ng-content></ng-content>`
})
export class FcCardHeaderComponent {}

@Component({
  selector: 'fc-card-content',
  template: `<ng-content></ng-content>`
})
export class FcCardContentComponent {}

@Component({
  selector: 'fc-card-footer',
  template: `<ng-content></ng-content>`
})
export class FcCardFooterComponent {}
