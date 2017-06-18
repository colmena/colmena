import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContentDashboardComponent } from './content.component'

import { PagesRoutes } from './pages/pages.routes'

import { EventsComponent } from './events/events.component'
import { FilesComponent } from './files/files.component'
import { PostsComponent } from './posts/posts.component'
import { ProductsComponent } from './products/products.component'

import { HasContentAccess } from './content.guards'
import { DomainResolver } from './content.resolvers'

export const routes: Routes = [
  {
    path: 'content',
    data: {
      title: 'Content',
    },
    canActivate: [HasContentAccess],
    resolve: { domain: DomainResolver },
    children: [
      {
        path: '',
        component: ContentDashboardComponent,
        data: { title: 'Dashboard' },
      },
      { path: 'events', component: EventsComponent, data: { title: 'Events' } },
      { path: 'files', component: FilesComponent, data: { title: 'Files' } },
      ...PagesRoutes,
      { path: 'posts', component: PostsComponent, data: { title: 'Posts' } },
      {
        path: 'products',
        component: ProductsComponent,
        data: { title: 'Products' },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
