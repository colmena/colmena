import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-message',
  template: `
    <div class="container d-table">
      <div class="d-100vh-va-middle">
        <div class="row">
          <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
            <div class="card-group">
              <ui-logo></ui-logo>
              <h1 *ngIf="message" class="text-cs-center"></h1>
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UiMessageComponent {

  @Input()
  public message: string = null
}
