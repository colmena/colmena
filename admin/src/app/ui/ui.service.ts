import { Injectable } from '@angular/core'

import { assign, noop } from 'lodash'

import { ToastyService, ToastyConfig } from 'ng2-toasty'

let win: any = typeof window !== 'undefined' && window || {}

@Injectable()
export class UiService {

  constructor(
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
  ) {
    this.toastyConfig.limit = 10
    this.toastyConfig.theme = 'bootstrap'
  }

  toastDefault(title, msg) {
    this.toastyService.default({
      title,
      msg,
    })
  }

  toastError(title, msg) {
    this.toastyService.error({
      title,
      msg,
    })
  }

  toastInfo(title, msg) {
    this.toastyService.info({
      title,
      msg,
    })
  }

  toastSuccess(title, msg) {
    this.toastyService.success({
      title,
      msg,
    })
  }

  toastWait(title, msg) {
    this.toastyService.wait({
      title,
      msg,
    })
  }

  toastWarning(title, msg) {
    this.toastyService.warning({
      title,
      msg,
    })
  }

  alert(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions: any = {
      type: options.type || null,
      title: options.title || null,
      text: options.text || null,
      buttonsStyling: options.buttonsStyling || false,
      confirmButtonClass : options.confirmButtonClass || 'btn btn-lg btn-secondary',
      animation: options.animation || false,
      customClass: options.customClass || '',
    }

    if (closeCb !== noop) {
      defaultOptions.showCancelButton = options.showCancelButton || true
      defaultOptions.cancelButtonClass = options.cancelButtonClass || 'btn btn-lg btn-secondary'
    }

    return win.Sweetalert2(assign(defaultOptions, options))
      .then(res => successCb(res), dismiss => closeCb(dismiss))
  }

  alertSuccess(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'success',
      confirmButtonClass: 'btn btn-lg btn-success',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }

  alertWarning(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'warning',
      confirmButtonClass: 'btn btn-lg btn-warning',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }

  alertError(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'error',
      confirmButtonClass: 'btn btn-lg btn-danger',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }

  alertInfo(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'info',
      confirmButtonClass: 'btn btn-lg btn-info',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }

  alertQuestion(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'question',
      confirmButtonClass: 'btn btn-lg btn-primary',
    }
    return this.alert(assign(defaultOptions, options), successCb, closeCb)
  }
}
