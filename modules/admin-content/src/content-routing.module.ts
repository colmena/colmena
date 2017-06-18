import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContentDashboardComponent } from './content.component'

import { PostsRoutes } from './posts/posts.routes'
import { PagesRoutes } from './pages/pages.routes'
import { EventsRoutes } from './events/events.routes'

import { FilesComponent } from './files/files.component'
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
      { path: '', component: ContentDashboardComponent, data: { title: 'Dashboard' } },
      { path: 'files', component: FilesComponent, data: { title: 'Files' } },
      ...PagesRoutes,
      ...PostsRoutes,
      ...EventsRoutes,
      { path: 'products', component: ProductsComponent, data: { title: 'Products' } },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
