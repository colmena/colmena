import { Routes } from '@angular/router'

import { ContentEventsRoutes } from './events/events.routes'
import { ContentPostsRoutes } from './posts/posts.routes'
import { ContentProductsRoutes } from './products/products.routes'

export const ContentRoutes: Routes = [ {
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
