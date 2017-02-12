import { Routes } from '@angular/router'

import { HasContentAccess } from '../app.guards'
import { DomainResolver } from '../app.resolvers'

import { ContentDashboardComponent } from './content.component'
import { EventsComponent } from './events/events.component'
import { PagesComponent } from './pages/pages.component'
import { PostsComponent } from './posts/posts.component'
import { ProductsComponent } from './products/products.component'

export const ContentModuleRoutes: Routes = [ {
  path: 'content',
  data: {
    title: 'Content',
  },
  canActivate: [ HasContentAccess ],
  resolve: { domain: DomainResolver },
  children: [
    { path: '', component: ContentDashboardComponent, data: { title: 'Dashboard' } },
    { path: 'events', component: EventsComponent, data: { title: 'Events' } },
    { path: 'pages', component: PagesComponent, data: { title: 'Pages' } },
    { path: 'posts', component: PostsComponent, data: { title: 'Posts' } },
    { path: 'products', component: ProductsComponent, data: { title: 'Products' } },
  ],
} ]
