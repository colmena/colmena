import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-message',
  template: `
    <div class="container d-table">
      <div class="d-100vh-va-middle">
        <div class="row">
          <div class="col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div class="card">
              <div class="card-header">
                <ui-logo></ui-logo>
              </div>
              <div class="card-block">
                <h3 *ngIf="message" class="my-3 text-xs-center">{{message}}</h3>
                <ng-content></ng-content>
              </div>
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
