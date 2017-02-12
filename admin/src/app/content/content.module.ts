import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppSharedModule } from '../app.shared.module'

import { ContentDashboardComponent } from './content.component'

import { EventsComponent } from './events/events.component'
import { PagesComponent } from './pages/pages.component'
import { PostsComponent } from './posts/posts.component'
import { ProductsComponent } from './products/products.component'

import { EventsService } from './events/events.service'
import { PagesService } from './pages/pages.service'
import { PostsService } from './posts/posts.service'
import { ProductsService } from './products/products.service'

const components = [
  EventsComponent,
  PagesComponent,
  PostsComponent,
  ProductsComponent,
]

const providers = [
  EventsService,
  PagesService,
  PostsService,
  ProductsService,
]

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    ContentDashboardComponent,
    ...components,
  ],
  exports: [
    ContentDashboardComponent,
  ],
  providers: [
    ...providers,
  ]
})
export class ContentModule {

  constructor(
    private store: Store<any>,
  ) {
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: { weight: 5, type: 'title', label: 'Content' } })

    this.dispatchLinks({ weight: 10, label: 'Events', icon: 'icon-event', link: [ '/', 'content', 'events' ] })
    this.dispatchLinks({ weight: 20, label: 'Pages', icon: 'icon-doc', link: [ '/', 'content', 'pages' ] })
    this.dispatchLinks({ weight: 30, label: 'Posts', icon: 'icon-note', link: [ '/', 'content', 'posts' ] })
    this.dispatchLinks({ weight: 40, label: 'Products', icon: 'icon-basket', link: [ '/', 'content', 'products' ] })
  }

  dispatchLinks(links) {
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: links})
    this.store.dispatch({ type: 'APP_CONTENT_DASHBOARD', payload: links})
  }
}
