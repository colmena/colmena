import {Injectable} from '@angular/core';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Injectable()
export class UiService {

  constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }

  toastDefault(title, msg) {
    this.toastyService.default({
      title,
      msg,
    });
  }

  toastError(title, msg) {
    this.toastyService.error({
      title,
      msg,
    });
  }

  toastInfo(title, msg) {
    this.toastyService.info({
      title,
      msg,
    });
  }

  toastSuccess(title, msg) {
    this.toastyService.success({
      title,
      msg,
    });
  }

  toastWait(title, msg) {
    this.toastyService.wait({
      title,
      msg,
    });
  }

  toastWarning(title, msg) {
    this.toastyService.warning({
      title,
      msg,
    });
  }

}
