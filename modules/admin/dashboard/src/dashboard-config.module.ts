import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'dashboard'

const link = (...links) => ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Dashboard',
  icon: 'icon-speedometer',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { weight: 0, label: 'Dashboard',   icon: 'icon-speedometer', link: link() }
  ],
  sidebarLinks: [
    { weight: 0, label: 'Dashboard',   icon: 'icon-speedometer', link: link() }
  ],
  dashboardLinks: {},
}

@NgModule()
export class DashboardConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }

}

