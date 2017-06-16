import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'content'
const moduleConfig = {
  name: 'Content',
  icon: 'icon-layers',
  dashboardIcon: true,
  topLinks: [
    { label: 'Content', icon: 'icon-layers', link: ['/', 'content'] },
  ],
  sidebarLinks: [
    { type: 'title',  label: 'Content' },
    { type: 'link',   label: 'Events',    icon: 'icon-event',     link: [ '/', 'content', 'events' ] },
    { type: 'link',   label: 'Files',     icon: 'icon-docs',      link: [ '/', 'content', 'files' ] },
    { type: 'link',   label: 'Pages',     icon: 'icon-book-open', link: [ '/', 'content', 'pages' ] },
    { type: 'link',   label: 'Posts',     icon: 'icon-note',      link: [ '/', 'content', 'posts' ] },
    { type: 'link',   label: 'Products',  icon: 'icon-basket',    link: [ '/', 'content', 'products' ] },
  ],
  dashboardLinks: [
    { count: '∞', label: 'Events',    type: 'info',     icon: 'icon-event',       link: [ '/', 'content', 'events' ] },
    { count: '∞', label: 'Files',     type: 'success',  icon: 'icon-docs',        link: [ '/', 'content', 'files' ] },
    { count: '∞', label: 'Pages',     type: 'primary',  icon: 'icon-book-open',   link: [ '/', 'content', 'pages' ] },
    { count: '∞', label: 'Posts',     type: 'warning',  icon: 'icon-note',        link: [ '/', 'content', 'posts' ] },
    { count: '∞', label: 'Products',  type: 'danger',   icon: 'icon-basket',      link: [ '/', 'content', 'products' ] },
  ],
}

@NgModule({
  imports: [],
  exports: []
})
export class ContentConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig }})
  }

}

