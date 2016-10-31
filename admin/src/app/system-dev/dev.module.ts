import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {DevComponent}           from './dev.component';
import {DevRoutingModule}       from './dev-routing.module';

@NgModule({
  imports: [
    DevRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    DevComponent
  ]
})
export class DevModule {
}
