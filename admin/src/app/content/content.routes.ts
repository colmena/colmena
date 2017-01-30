import { Routes } from '@angular/router'

import { ContentEventsRoutes } from './events/events.routes'
import { ContentPostsRoutes } from './posts/posts.routes'
import { ContentProductsRoutes } from './products/products.routes'
import { ContentDashboardComponent } from './content.component'

export const ContentModuleRoutes: Routes = [ {
  path: 'content',
  data: {
    title: 'Content',
  },
  children: [
    { path: '', component: ContentDashboardComponent, data: { title: 'Dashboard' } },
    ...ContentEventsRoutes,
    ...ContentPostsRoutes,
    ...ContentProductsRoutes,
  ],
} ]
