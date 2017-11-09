import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'storage'

const link = (...links) => ['/', moduleName, ...links]

const moduleConfig = {
  name: 'Storage',
  icon: 'icon-docs',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [{ weight: 2, label: 'Storage', icon: 'icon-docs', link: link() }],
  sidebarLinks: [
    { weight: 90, label: 'Storage', type: 'title' },
    { weight: 90, label: 'Files', icon: 'icon-docs', link: link() },
  ],
  dashboardLinks: {
    content: [{ count: '∞', label: 'Files', type: 'success', icon: 'icon-docs', link: link() }],
  },
}

@NgModule()
export class StorageConfigModule {
  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }
}
