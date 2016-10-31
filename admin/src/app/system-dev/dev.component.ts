import {Component} from '@angular/core';
import { UiService } from '../ui/ui.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html'
})
export class DevComponent {

  public toast = {
    title: 'Toast Title',
    text: 'This is the Toast Text!',
  };

  constructor(private uiService: UiService) {}

  addToast() {
    this.addToastError();
    this.addToastInfo();
    this.addToastSuccess();
    this.addToastWait();
    this.addToastWarning();
  }

  addToastError() {
    this.uiService.toastError(`Error ${this.toast.title}`, this.toast.text);
  }

  addToastInfo() {
    this.uiService.toastInfo(`Info ${this.toast.title}`, this.toast.text);
  }

  addToastSuccess() {
    this.uiService.toastSuccess(`Success ${this.toast.title}`, this.toast.text);
  }

  addToastWait() {
    this.uiService.toastWait(`Wait ${this.toast.title}`, this.toast.text);
  }

  addToastWarning() {
    this.uiService.toastWarning(`Warning ${this.toast.title}`, this.toast.text);
  }

}
