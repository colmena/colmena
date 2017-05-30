import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { Store } from '@ngrx/store'

import { ContentModule } from '@colmena/module-admin-content'
import { SystemModule } from '@colmena/module-admin-system'

import { AboutComponent } from './about/about.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PasswordComponent } from './password/password.component'
import { ProfileComponent } from './profile/profile.component'

const components = [
  AboutComponent,
  DashboardComponent,
  PasswordComponent,
  ProfileComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,

    ColmenaUiModule,
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
