import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppSharedModule } from '../app.shared.module'

import { DevAlertComponent } from './alert/alert.component'
import { DevIndexComponent } from './index/index.component'
import { DevToastComponent } from './toast/toast.component'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    DevAlertComponent,
    DevIndexComponent,
    DevToastComponent,
  ],
})
export class DevModule {

  constructor(private store: Store<any>) {
    this.dispatchLinks({ weight: 140, label: 'Development', icon: 'icon-wrench', link: [ '/', 'development' ] })
  }

  dispatchLinks(links) {
    this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload: links })
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: links })
    this.store.dispatch({ type: 'APP_SYSTEM_DASHBOARD', payload: links })
  }

}
