import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { UsersRoutingModule } from './users-routing.module'

import { UserAccessTokensComponent } from './components/user-access-tokens.component'
import { UserDetailComponent } from './components/user-detail.component'
import { UserFormComponent } from './components/user-form.component'
import { UserHeaderComponent } from './components/user-header.component'
import { UserListComponent } from './components/user-list.component'
import { UserPasswordComponent } from './components/user-password.component'
import { UserRolesComponent } from './components/user-roles.component'

import { UsersService } from './users.service'
import { SystemUserResolver } from './users.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,

    UsersRoutingModule,
  ],
  declarations: [
    UserAccessTokensComponent,
    UserDetailComponent,
    UserFormComponent,
    UserHeaderComponent,
    UserListComponent,
    UserPasswordComponent,
    UserRolesComponent,
  ],
  providers: [UsersService, SystemUserResolver],
})
export class SystemUsersModule {}
