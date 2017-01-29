import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../app.shared.module'

import { UserFormComponent } from './user-form.component'
import { UserListComponent } from './user-list.component'

import { UsersService } from './users.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
  ],
  providers: [
    UsersService,
  ],
})
export class UsersModule {}
