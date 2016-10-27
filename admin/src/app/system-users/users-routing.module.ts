import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {UserDetailsComponent}   from './user-details.component';
import {UserFormComponent}      from './user-form.component';
import {UserListComponent}      from './user-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserListComponent, data: { title: 'List' } },
      { path: 'users/add', component: UserFormComponent, data: { title: 'Add' } },
      { path: 'users/:id', component: UserDetailsComponent, data: { title: 'Details' }  },
      { path: 'users/:id/edit', component: UserFormComponent, data: { title: 'Edit' }  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
