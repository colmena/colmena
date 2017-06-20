import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'browser'

const link = (...links) => ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Dashboard',
  icon: 'icon-speedometer',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { weight: 80, label: 'Browser', icon: 'fa fa-database', link: link() }
  ],
  sidebarLinks: [
    { weight: 80, type: 'title', label: 'Data' },
    { weight: 81, label: 'Browser', icon: 'fa fa-database', link: link() },
  ],
  dashboardLinks: {
    content: [
      { count: '∞', label: 'Data Browser', type: 'warning', icon: 'fa fa-database', link: link() },
    ]
  },
}

@NgModule()
export class DataBrowserConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }

}
