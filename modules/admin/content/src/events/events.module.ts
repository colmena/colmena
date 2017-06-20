import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { EventsRoutingModule } from './events-routing.module'

import { EventComponent } from './components/event.component'
import { EventDetailComponent } from './components/event-detail.component'
import { EventFormComponent } from './components/event-form.component'
import { EventListComponent } from './components/event-list.component'

import { EventsService } from './events.service'
import { EventsResolver } from './events.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,
    EventsRoutingModule,
  ],
  declarations: [
    EventComponent,
    EventDetailComponent,
    EventFormComponent,
    EventListComponent,
  ],
  providers: [EventsService, EventsResolver],
})
export class EventsModule {}
