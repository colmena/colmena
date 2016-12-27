import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { UiModule } from '../../ui/ui.module'

import { UsersService } from './users.service'

import { UserFormComponent } from './user-form.component'
import { UserListComponent } from './user-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
  ],
  providers: [
    UsersService,
  ],
})
export class UsersModule {
}
