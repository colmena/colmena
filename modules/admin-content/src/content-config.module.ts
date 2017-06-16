import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'content'

const link = (...links) => ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Content',
  icon: 'icon-layers',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { label: 'Content', icon: 'icon-layers', link: link() },
  ],
  sidebarLinks: [
    { weight: 5, type: 'title', label: 'Content' },
    { weight: 10, label: 'Events', icon: 'icon-event', link: link('events') },
    { weight: 20, label: 'Files', icon: 'icon-docs', link: link('files') },
    { weight: 30, label: 'Pages', icon: 'icon-book-open', link: link('pages') },
    { weight: 40, label: 'Posts', icon: 'icon-note', link: link('posts') },
    { weight: 50, label: 'Products', icon: 'icon-basket', link: link('products') },
  ],
  dashboardLinks: {
    content: [
      { count: '∞', label: 'Events', type: 'info', icon: 'icon-event', link: link('events') },
      { count: '∞', label: 'Files', type: 'success', icon: 'icon-docs', link: link('files') },
      { count: '∞', label: 'Pages', type: 'primary', icon: 'icon-book-open', link: link('pages') },
      { count: '∞', label: 'Posts', type: 'warning', icon: 'icon-note', link: link('posts') },
      { count: '∞', label: 'Products', type: 'danger', icon: 'icon-basket', link: link('products') },
    ]
  },
}

@NgModule()
export class ContentConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }

}

