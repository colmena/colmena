import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {UsersRoutingModule}     from './users-routing.module';

import {UserDetailsComponent}   from './user-details.component';
import {UserFormComponent}      from './user-form.component';
import {UserListComponent}      from './user-list.component';
import {UiModule}                 from '../ui/ui.module';
import {UsersService} from './users.service';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    UserDetailsComponent,
    UserFormComponent,
    UserListComponent,
  ],
  providers: [
    UsersService,
  ]
})
export class UsersModule {
}
