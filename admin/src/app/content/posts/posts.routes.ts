import { Routes }   from '@angular/router'

import { PostFormComponent }      from './post-form.component'
import { PostListComponent }      from './post-list.component'

export const ContentPostsRoutes: Routes = [ {
  path: 'posts',
  data: {
    title: 'Posts',
  },
  children: [
    { path: '', component: PostListComponent, data: { title: 'List' } },
    { path: 'add', component: PostFormComponent, data: { title: 'Add' } },
    { path: 'edit/:id', component: PostFormComponent, data: { title: 'Edit' } },
  ],
} ]
