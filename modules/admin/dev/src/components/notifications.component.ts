import { Component } from '@angular/core'
import { UiService } from '@colmena/admin-ui'

@Component({
  selector: 'app-dev-notify',
  template: `
    <ui-card>
      <ui-card-header>Notifications</ui-card-header>
      <ui-card-content>
        <div class="form-group">
          <label for="notifyTitle">Notification Title</label>
          <input id="notifyTitle" type="text" class="form-control" [(ngModel)]="notify.title" />
        </div>

        <div class="form-group">
          <label for="notifyText">Notification Text</label>
          <input id="notifyText" type="text" class="form-control" [(ngModel)]="notify.body" />
        </div>

        <button (click)="testNotifySuccess()" class="btn btn-success">Success!</button>
        <button (click)="testNotifyError()" class="btn btn-danger">Error!</button>
        <button (click)="testNotifyWarning()" class="btn btn-warning">Warning!</button>
        <button (click)="testNotifyInfo()" class="btn btn-info">Info!</button>
        <button (click)="testNotify()" class="btn btn-secondary">All!</button>
      </ui-card-content>
    </ui-card>
  `,
  styles: [],
})
export class NotifyComponent {
  public notify = {
    title: 'Notification Title',
    body: 'This is the Notification Text!',
  }

  constructor(private ui: UiService) {}

  testNotifyError() {
    this.ui.alerts.notifyError(this.notify)
  }

  testNotifyInfo() {
    this.ui.alerts.notifyInfo(this.notify)
  }

  testNotifySuccess() {
    this.ui.alerts.notifySuccess(this.notify)
  }

  testNotifyWarning() {
    this.ui.alerts.notifyWarning(this.notify)
  }

  testNotify() {
    this.testNotifyError()
    this.testNotifyInfo()
    this.testNotifySuccess()
    this.testNotifyWarning()
  }
}
