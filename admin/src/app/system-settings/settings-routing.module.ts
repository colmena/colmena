import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {SettingDetailsComponent}   from './setting-details.component';
import {SettingFormComponent}      from './setting-form.component';
import {SettingListComponent}      from './setting-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: 'settings', component: SettingListComponent, data: { title: 'List' } },
      { path: 'settings/add', component: SettingFormComponent, data: { title: 'Add' } },
      { path: 'settings/:id', component: SettingDetailsComponent, data: { title: 'Details' }  },
      { path: 'settings/:id/edit', component: SettingFormComponent, data: { title: 'Edit' }  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
