import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContentDashboardComponent } from './content.component'

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
      { path: '', loadChildren: './events/events.module#EventsModule' },
      { path: '', loadChildren: './pages/pages.module#PagesModule' },
      { path: '', loadChildren: './posts/posts.module#PostsModule' },
      { path: 'products', component: ProductsComponent, data: { title: 'Products' } },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
