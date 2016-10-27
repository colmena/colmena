import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {EventDetailsComponent}   from './event-details.component';
import {EventFormComponent}      from './event-form.component';
import {EventListComponent}      from './event-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Events'
    },
    children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: 'events', component: EventListComponent, data: { title: 'List' } },
      { path: 'events/add', component: EventFormComponent, data: { title: 'Add' } },
      { path: 'events/:id', component: EventDetailsComponent, data: { title: 'Details' }  },
      { path: 'events/:id/edit', component: EventFormComponent, data: { title: 'Edit' }  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
