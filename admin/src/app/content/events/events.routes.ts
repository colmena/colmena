import { Routes } from '@angular/router'

import { EventFormComponent } from './event-form.component'
import { EventListComponent } from './event-list.component'

export const ContentEventsRoutes: Routes = [ {
  path: 'events',
  data: {
    title: 'Events',
  },
  children: [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: '', component: EventListComponent, data: { title: 'List' } },
    { path: 'add', component: EventFormComponent, data: { title: 'Add' } },
    { path: 'edit/:id', component: EventFormComponent, data: { title: 'Edit' } },
  ],
} ]
