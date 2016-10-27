import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {EventsRoutingModule}     from './events-routing.module';

import {EventDetailsComponent}   from './event-details.component';
import {EventFormComponent}      from './event-form.component';
import {EventListComponent}      from './event-list.component';
import {UiModule}                 from '../ui/ui.module';
import {EventsService} from './events.service';

@NgModule({
  imports: [
    EventsRoutingModule,
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    EventDetailsComponent,
    EventFormComponent,
    EventListComponent,
  ],
  providers: [
    EventsService,
  ]
})
export class EventsModule {
}
