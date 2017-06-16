import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'development'

const link = (...links) =>  ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Dev',
  dashboardIcon: true,
  topLinks: [

  ],
  sidebarLinks: [

  ],
  dashboardLinks: {
    system: [

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

