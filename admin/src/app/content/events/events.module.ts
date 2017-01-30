import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

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
export class EventsModule {
  constructor(private store: Store<any>) {
    this.store.dispatch({
      type: 'LAYOUT_SIDEBAR_NAV', payload: {
        weight: 10, label: 'Events', icon: 'icon-calendar', link: [ '/', 'content', 'events' ]
      }
    })
  }
}
