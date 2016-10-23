import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';

import {UsersComponent}           from './users.component';
import {UsersRoutingModule}       from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule {
}
