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
  moduleLink = {
    weight: 10, label: 'Events', icon: 'icon-calendar', link: [ '/', 'content', 'events' ]
  }
  constructor(private store: Store<any>) {
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: this.moduleLink})
    this.store.dispatch({ type: 'APP_CONTENT_DASHBOARD', payload: this.moduleLink})
  }
}
