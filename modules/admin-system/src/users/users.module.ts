import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { UserDetailComponent } from './containers/user-detail.component'
import { UserListComponent } from './containers/user-list.component'

import { UserAccessTokensComponent } from './components/user-access-tokens.component'
import { UserHeaderComponent } from './components/user-header.component'
import { UserPasswordComponent } from './components/user-password.component'
import { UserFormComponent } from './components/user-form.component'
import { UserRolesComponent } from './components/user-roles.component'

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
    UserDetailComponent,
    UserListComponent,

    UserAccessTokensComponent,
    UserHeaderComponent,
    UserPasswordComponent,
    UserFormComponent,
    UserRolesComponent,
  ],
  providers: [
    UsersService,
  ],
})
export class SystemUsersModule { }
