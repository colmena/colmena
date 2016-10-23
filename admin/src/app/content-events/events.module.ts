import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {EventsComponent}          from './events.component';

import {EventsRoutingModule}      from './events-routing.module';

@NgModule({
  imports: [
    EventsRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    EventsComponent,
  ]
})
export class EventsModule {
}
