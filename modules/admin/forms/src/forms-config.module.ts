import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'forms'

const link = (...links) => ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Forms',
  icon: 'icon-speedometer',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { weight: 2, label: 'Forms',   icon: 'icon-control-play', link: link() }
  ],
  sidebarLinks: [
    { weight: 1, type: 'title', label: 'Forms' },
    { weight: 2, label: 'Forms',   icon: 'icon-control-play', link: link() }
  ],
  dashboardLinks: {},
}

@NgModule()
export class FormsConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }

}

