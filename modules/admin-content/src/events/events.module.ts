import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { EventDetailComponent } from './components/event-detail.component'
import { EventComponent } from './components/event.component'
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
    RouterModule,
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
