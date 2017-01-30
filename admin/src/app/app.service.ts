import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { DomainApi, SettingApi } from '@lb-sdk'

import { LogService } from './log.service'

@Injectable()
export class AppService {

  public dispatchDomain(domain) {
    this.store.dispatch({ type: 'APP_ADD_DOMAIN', payload: domain })
  }

  public dispatchSetting(setting) {
    this.store.dispatch({ type: 'APP_ADD_SETTING', payload: setting })
  }

  public fetchSettings() {
    this.log.info('AppService: Fetch Settings')
    return this.settingApi
      .find({ fields: { key: true, value: true } })
      .subscribe(res => res.forEach(setting => this.dispatchSetting(setting)))
  }

  public fetchDomains() {
    this.log.info('AppService: Fetch Domains')
    return this.domainApi
      .find({ fields: { id: true, name: true } })
      .subscribe(res => res.forEach(domain => this.dispatchDomain(domain)))
  }

  constructor(
    private domainApi: DomainApi,
    private log: LogService,
    private settingApi: SettingApi,
    private store: Store<any>
  ) {
    const token = window.localStorage.getItem('token')
    if (token) {
      this.store.dispatch({ type: 'AUTH_LOGIN_TOKEN', payload: JSON.parse(token)})
    }
  }

}
