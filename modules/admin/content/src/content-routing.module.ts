import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContentDashboardComponent } from './content.component'

import { HasContentAccess } from './content.guards'
import { DomainResolver } from './content.resolvers'

export const routes: Routes = [
  {
    path: '',
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
      { path: 'events', loadChildren: './events/events.module#EventsModule' },
      { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
      { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
      { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
