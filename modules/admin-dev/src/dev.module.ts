import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { Store } from '@ngrx/store'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { DevAlertComponent } from './alert/alert.component'
import { DevIndexComponent } from './index/index.component'
import { DevToastComponent } from './toast/toast.component'

import { DevRoutingModule } from './dev-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,

    DevRoutingModule,
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
    this.dispatchIcons({ label: 'Development', type: 'danger', icon: 'icon-wrench', link: [ '/', 'development' ] })
  }

  dispatchLinks(links) {
    this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload: links })
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: links })
  }

  dispatchIcons(links) {
    this.store.dispatch({ type: 'APP_SYSTEM_DASHBOARD', payload: links })
  }

}
