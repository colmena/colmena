import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { CoreApi } from '@colmena/admin-lb-sdk'

@Injectable()
export class AppService {

  public dispatchDomain(domain) {
    this.store.dispatch({ type: 'APP_DOMAIN_ADD', payload: domain })
  }

  public dispatchSetting(setting) {
    this.store.dispatch({ type: 'APP_SETTING_ADD', payload: setting })
  }

  public fetchSettings() {
    return this.coreApi
      .getSettings()
      .subscribe(res => res.forEach(setting => this.dispatchSetting(setting)))
  }

  public fetchDomains() {
    return this.coreApi
      .getDomains()
      .subscribe(res => res.forEach(domain => this.dispatchDomain(domain)))
  }

  constructor(
    private coreApi: CoreApi,
    private store: Store<any>
  ) {
    if (window.localStorage.getItem('domain')) {
      this.store.dispatch({ type: 'APP_DOMAIN_SET', payload: JSON.parse(window.localStorage.getItem('domain'))})
    } else {
      this.store.dispatch({ type: 'APP_DOMAIN_SET_DEFAULT' })
    }
    if (window.localStorage.getItem('token')) {
      this.store.dispatch({ type: 'AUTH_CHECK_TOKEN' })
      this.store.dispatch({ type: 'AUTH_SET_TOKEN', payload: JSON.parse(window.localStorage.getItem('token'))})
    }
    if (window.localStorage.getItem('roles')) {
      this.store.dispatch({ type: 'AUTH_SET_ROLES', payload: JSON.parse(window.localStorage.getItem('roles'))})
    }
  }

}
