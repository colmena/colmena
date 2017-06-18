import { Routes } from '@angular/router'

import { PostListComponent } from './components/post-list.component'
import { PostDetailComponent } from './components/post-detail.component'
import { PostFormComponent } from './components/post-form.component'

import { PostsResolver } from './posts.resolvers'

export const PostsRoutes: Routes = [
  {
    path: 'posts',
    data: { title: 'Posts' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: PostListComponent,
        data: { title: 'List' },
      },
      {
        path: 'create',
        component: PostDetailComponent,
        data: { title: 'Create' },
        children: [
          {
            path: '',
            component: PostFormComponent,
          },
        ],
      },
      {
        path: ':id',
        component: PostDetailComponent,
        resolve: {
          post: PostsResolver,
        },
        data: { title: 'Post' },
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          {
            path: 'edit',
            component: PostFormComponent,
            data: { title: 'Edit' },
          },
        ],
      },
    ],
  },
]
