import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {EventsComponent}       from './events.component';

const routes: Routes = [{
  path: 'events',
  component: EventsComponent,
  data: {
    title: 'Events'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
