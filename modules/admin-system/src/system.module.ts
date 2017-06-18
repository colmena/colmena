import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { SystemUsersModule } from './users/users.module'

import { SystemDashboardComponent } from './system.component'
import { SystemInfoComponent } from './system-info.component'
import { SystemModulesComponent } from './system-modules.component'

import { SystemUserResolver } from './users/users.resolvers'

import { SystemRoutingModule } from './system-routing.module'
import { HasSystemAccess } from './system.guards'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ColmenaUiModule,

    SystemUsersModule,
    RouterModule,

    SystemRoutingModule,
  ],
  declarations: [
    SystemDashboardComponent,
    SystemInfoComponent,
    SystemModulesComponent,
  ],
  providers: [
    SystemUserResolver,
    HasSystemAccess,
  ],
  exports: [
    SystemDashboardComponent,
  ],
})
export class SystemModule {

  constructor(
    private store: Store<any>,
  ) {
  }

  dispatchLinks(links) {
    this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload: links })
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: links })
  }

  dispatchIcons(links) {
    this.store.dispatch({ type: 'APP_SYSTEM_DASHBOARD', payload: links })
  }
}
