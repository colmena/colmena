import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ContentDashboardComponent } from './content.component'

import { EventsComponent } from './events/events.component'
import { FilesComponent } from './files/files.component'
import { PagesComponent } from './pages/pages.component'
import { PostsComponent } from './posts/posts.component'
import { ProductsComponent } from './products/products.component'

export const ContentModuleRoutes: Routes = [ {
  path: '',
  data: {
    title: 'Content',
  },
  children: [
    { path: '', component: ContentDashboardComponent, data: { title: 'Dashboard' } },
    { path: 'events', component: EventsComponent, data: { title: 'Events' } },
    { path: 'files', component: FilesComponent, data: { title: 'Files' } },
    { path: 'pages', component: PagesComponent, data: { title: 'Pages' } },
    { path: 'posts', component: PostsComponent, data: { title: 'Posts' } },
    { path: 'products', component: ProductsComponent, data: { title: 'Products' } },
  ],
} ]

@NgModule({
  imports: [RouterModule.forChild(ContentModuleRoutes)],
  exports: [RouterModule]
})
export class ContentRoutesModule { }
