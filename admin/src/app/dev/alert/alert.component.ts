import { Component } from '@angular/core'
import { UiService } from '../../ui/ui.service'

@Component({
  selector: 'app-dev-alert',
  template: `
    <ui-card>
      <ui-card-header>Alerts</ui-card-header>
      <ui-card-content>
        <div class="form-group">
          <label for="alertText">Alert Text</label>
          <input id="alertText" type="text" class="form-control" [(ngModel)]="alert.text" />
        </div>

        <button (click)="testAlertSuccess()" class="btn btn-success">Success</button>
        <button (click)="testAlertError()" class="btn btn-danger">Error</button>
        <button (click)="testAlertWarning()" class="btn btn-warning">Warning</button>
        <button (click)="testAlertInfo()" class="btn btn-info">Info</button>
        <button (click)="testAlertQuestion()" class="btn btn-primary">Question</button>
        <button (click)="testAlertPrompt()" class="btn btn-secondary">Prompt</button>
      </ui-card-content>
    </ui-card>
  `,
  styles: []
})
export class DevAlertComponent {

  public alert = {
    text: 'This is the Alert Text!',
  }

  constructor(
    private uiService: UiService,
  ) {
  }

  testAlertSuccess() {
    this.uiService.alertSuccess({
      title: 'Success alert',
      text: this.alert.text,
    })
  }

  testAlertWarning() {
    this.uiService.alertWarning({
      title: 'Warning alert',
      text: this.alert.text,
    })
  }

  testAlertError() {
    this.uiService.alertError({
      title: 'Error alert',
      text: this.alert.text,
    })
  }

  testAlertInfo() {
    this.uiService.alertInfo({
      title: 'Info alert',
      text: this.alert.text,
    })
  }

  testAlertQuestion() {
    const successCb = () => this.uiService.alertSuccess({ title: '<i class="fa fa-thumbs-up"></i> Glad you liked it' })
    const closeCb = () => this.uiService.alertError({ title: '<i class="fa fa-thumbs-down"></i> That\'s a pity...' })

    this.uiService.alertQuestion({
      title: 'Do you like these alerts?',
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Awesome!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> Not so much...',
    }, successCb, closeCb)
  }

  testAlertPrompt() {
    const successCb = name => this.uiService.alert({ title: `You claim your name is ${name}` })
    const closeCb = () => this.uiService.alert({ title: `You did not tell your name` })

    this.uiService.alertQuestion({
      title: 'What is your name?',
      input: 'text',
    }, successCb, closeCb)
  }

}
