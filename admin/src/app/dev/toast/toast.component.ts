import { Component } from '@angular/core'
import { UiService } from '../../ui/ui.service'

@Component({
  selector: 'app-dev-toast',
  template: `
    <ui-card>
      <ui-card-header>Toasts</ui-card-header>
      <ui-card-content>
        <div class="form-group">
          <label for="toastTitle">Toast Title</label>
          <input id="toastTitle" type="text" class="form-control" [(ngModel)]="toast.title" />
        </div>

        <div class="form-group">
          <label for="toastText">Toast Text</label>
          <input id="toastText" type="text" class="form-control" [(ngModel)]="toast.text" />
        </div>

        <button (click)="testToastSuccess()" class="btn btn-success">Success!</button>
        <button (click)="testToastError()" class="btn btn-danger">Error!</button>
        <button (click)="testToastWarning()" class="btn btn-warning">Warning!</button>
        <button (click)="testToastInfo()" class="btn btn-info">Info!</button>
        <button (click)="testToastWait()" class="btn btn-primary">Wait!</button>
        <button (click)="testToast()" class="btn btn-secondary">All!</button>
      </ui-card-content>
    </ui-card>
  `,
  styles: []
})
export class DevToastComponent {

  public toast = {
    title: 'Toast Title',
    text: 'This is the Toast Text!',
  }

  constructor(private uiService: UiService) {}

  testToastError() {
    this.uiService.toastError(`Error ${this.toast.title}`, this.toast.text)
  }

  testToastInfo() {
    this.uiService.toastInfo(`Info ${this.toast.title}`, this.toast.text)
  }

  testToastSuccess() {
    this.uiService.toastSuccess(`Success ${this.toast.title}`, this.toast.text)
  }

  testToastWait() {
    this.uiService.toastWait(`Wait ${this.toast.title}`, this.toast.text)
  }

  testToastWarning() {
    this.uiService.toastWarning(`Warning ${this.toast.title}`, this.toast.text)
  }

  testToast() {
    this.testToastError()
    this.testToastInfo()
    this.testToastSuccess()
    this.testToastWait()
    this.testToastWarning()
  }

}
