import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { UserListComponent } from './containers/user-list.component'
import { UserDetailComponent } from './containers/user-detail.component'

import { UserAccessTokensComponent } from './components/user-access-tokens.component'
import { UserHeaderComponent } from './components/user-header.component'
import { UserPasswordComponent } from './components/user-password.component'
import { UserProfileComponent } from './components/user-profile.component'
import { UserRolesComponent } from './components/user-roles.component'
import { UserTabsComponent } from './components/user-tabs.component'

import { UsersService } from './users.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,
    RouterModule,
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserAccessTokensComponent,
    UserHeaderComponent,
    UserPasswordComponent,
    UserProfileComponent,
    UserRolesComponent,
    UserTabsComponent,
  ],
  providers: [
    UsersService,
  ],
  exports: [
    UserListComponent
  ]
})
export class SystemUsersModule { }
