import {NgModule}                 from '@angular/core';
import {Routes, RouterModule}     from '@angular/router';

import {SettingsComponent}        from './settings.component';

const routes: Routes = [{
  path: 'settings',
  component: SettingsComponent,
  data: {
    title: 'Settings'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
