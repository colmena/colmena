import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { UiModule } from '../../ui/ui.module'

import { EventFormComponent } from './event-form.component'
import { EventListComponent } from './event-list.component'

import { EventsService } from './events.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
  ],
  declarations: [
    EventFormComponent,
    EventListComponent,
  ],
  providers: [
    EventsService,
  ],
})
export class EventsModule {
}
