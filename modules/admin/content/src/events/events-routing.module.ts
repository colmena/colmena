import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { EventDetailComponent } from './components/event-detail.component'
import { EventFormComponent } from './components/event-form.component'
import { EventListComponent } from './components/event-list.component'

import { EventsResolver } from './events.resolvers'

const routes: Routes = [
  {
    path: 'events',
    data: { title: 'Events' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: EventListComponent,
        data: { title: 'List' },
      },
      {
        path: 'create',
        component: EventDetailComponent,
        data: { title: 'Create' },
        children: [
          {
            path: '',
            component: EventFormComponent,
          },
        ],
      },
      {
        path: ':id',
        component: EventDetailComponent,
        resolve: {
          event: EventsResolver,
        },
        data: { title: 'Event' },
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          {
            path: 'edit',
            component: EventFormComponent,
            data: { title: 'Edit' },
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
