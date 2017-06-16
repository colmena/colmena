import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'development'

const link = (...links) =>  ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Dev',
  dashboardIcon: true,
  topLinks: [
    { weight: 140, label: 'Development', icon: 'icon-wrench', link: link() }
  ],
  sidebarLinks: [
    { weight: 140, label: 'Development', icon: 'icon-wrench', link: link() }
  ],
  dashboardLinks: {
    system: [
      { label: 'Development', type: 'danger', icon: 'icon-wrench', link: link() }
    ]
  },
}
@NgModule({
  imports: [],
  exports: []
})
export class DevConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig }})
  }

}
