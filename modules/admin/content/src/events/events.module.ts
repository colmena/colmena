import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { EventsRoutingModule } from './events-routing.module'

import { EventsService } from './events.service'
import { EventsResolver } from './events.resolvers'

import { EventComponent } from './components/event.component'
import { EventDetailComponent } from './components/event-detail.component'
import { EventFormComponent } from './components/event-form.component'
import { EventListComponent } from './components/event-list.component'

@NgModule({
  imports: [ColmenaUiModule, EventsRoutingModule],
  declarations: [EventComponent, EventDetailComponent, EventFormComponent, EventListComponent],
  providers: [EventsService, EventsResolver],
})
export class EventsModule {}
