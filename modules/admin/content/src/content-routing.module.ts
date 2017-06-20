import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContentDashboardComponent } from './content.component'

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
      { path: '', loadChildren: './events/events.module#EventsModule' },
      { path: '', loadChildren: './pages/pages.module#PagesModule' },
      { path: '', loadChildren: './posts/posts.module#PostsModule' },
      { path: '', loadChildren: './products/products.module#ProductsModule' },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
