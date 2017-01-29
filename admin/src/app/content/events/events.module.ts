import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../app.shared.module'

import { EventFormComponent } from './event-form.component'
import { EventListComponent } from './event-list.component'

import { EventsService } from './events.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    EventFormComponent,
    EventListComponent,
  ],
  providers: [
    EventsService,
  ],
})
export class EventsModule {}
