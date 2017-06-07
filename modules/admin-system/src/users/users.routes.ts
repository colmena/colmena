import { Routes } from '@angular/router'

import { UserListComponent } from './containers/user-list.component'
import { UserDetailComponent } from './containers/user-detail.component'

import { UserAccessTokensComponent } from './components/user-access-tokens.component'
import { UserPasswordComponent } from './components/user-password.component'
import { UserProfileComponent } from './components/user-profile.component'
import { UserRolesComponent } from './components/user-roles.component'

import { SystemUserResolver } from './users.resolvers'

export const SystemUsersRoutes: Routes = [{
  path: 'users',
  data: { title: 'Users' },
  children: [
    {
      path: '',
      component: UserListComponent,
    },
    {
      path: ':id',
      component: UserDetailComponent,
      resolve: {
        systemUser: SystemUserResolver
      },
      data: { title: 'user' },
      children: [
        { path: '', redirectTo: 'profile', pathMatch: 'full' },
        {
          path: 'profile',
          component: UserProfileComponent,
          data: { title: 'Profile' },
        },
        {
          path: 'password',
          component: UserPasswordComponent,
          data: { title: 'Password' },
        },
        {
          path: 'access-tokens',
          component: UserAccessTokensComponent,
          data: { title: 'Access Tokens' },
        },
        {
          path: 'roles',
          component: UserRolesComponent,
          data: { title: 'Roles' },
        },
      ]
    },
  ]
}]
