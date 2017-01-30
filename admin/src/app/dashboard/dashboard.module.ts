import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppSharedModule } from '../app.shared.module'
import { ContentModule } from '../content/content.module'
import { SystemModule } from '../system/system.module'

import { AboutComponent } from './about/about.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProfileComponent } from './profile/profile.component'

const components = [
  AboutComponent,
  DashboardComponent,
  ProfileComponent,
]

@NgModule({
  imports: [
    AppSharedModule,
    ContentModule,
    SystemModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class DashboardModule {
  constructor(private store: Store<any>) {
    this.store.dispatch({
      type: 'LAYOUT_HEADER_NAV', payload: {
        weight: 0, label: 'Dashboard',   icon: 'icon-speedometer', link: [ '/', 'dashboard' ]
      }
    })
    this.store.dispatch({
      type: 'LAYOUT_SIDEBAR_NAV', payload: {
        weight: 0, label: 'Dashboard',   icon: 'icon-speedometer', link: [ '/', 'dashboard' ]
      }
    })
  }
}
