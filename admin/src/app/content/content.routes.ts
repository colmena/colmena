import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ContentEventsRoutes } from './events/events.routes'
import { ContentPostsRoutes } from './posts/posts.routes'
import { ContentProductsRoutes } from './products/products.routes'

const ContentRoutes: Routes = [ {
  path: 'content',
  data: {
    title: 'Content',
  },
  children: [
    ...ContentEventsRoutes,
    ...ContentPostsRoutes,
    ...ContentProductsRoutes,
  ],
} ]
@NgModule({
  imports: [
    RouterModule.forChild(ContentRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ContentRoutesModule {

}
