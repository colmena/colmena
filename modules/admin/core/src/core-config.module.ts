import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'core'

const link = (...links) => ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Core',
  icon: 'icon-speedometer',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { weight: 999, label: 'Core',   icon: 'icon-control-play', link: link() }
  ],
  sidebarLinks: [
    { weight: 999, label: 'Core',   icon: 'icon-control-play', link: link() }
  ],
  dashboardLinks: {},
}

@NgModule()
export class CoreConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }

}

