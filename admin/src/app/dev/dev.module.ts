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
    this.store.dispatch({
      type: 'LAYOUT_HEADER_NAV', payload: {
        weight: 40, label: 'Development', icon: 'icon-wrench', link: [ '/', 'development' ]
      }
    })
  }
}
