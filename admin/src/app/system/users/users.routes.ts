import { Routes } from '@angular/router'

import { UserFormComponent } from './user-form.component'
import { UserListComponent } from './user-list.component'

export const SystemUsersRoutes: Routes = [ {
  path: 'users',
  data: {
    title: 'Users',
  },
  children: [
    { path: '', component: UserListComponent, data: { title: 'List' } },
    { path: 'add', component: UserFormComponent, data: { title: 'Add' } },
    { path: 'edit/:id', component: UserFormComponent, data: { title: 'Edit' } },
  ],
} ]
