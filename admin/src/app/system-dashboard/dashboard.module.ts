import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {DashboardComponent}       from './dashboard.component';
import {DashboardRoutingModule}   from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
