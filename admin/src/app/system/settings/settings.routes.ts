import { Routes } from '@angular/router'

import { SettingFormComponent } from './setting-form.component'
import { SettingListComponent } from './setting-list.component'

export const SystemSettingsRoutes: Routes = [
  {
    path: 'settings',
    data: {
      title: 'Settings',
    },
    children: [
      { path: '', component: SettingListComponent, data: { title: 'List' } },
      { path: 'add', component: SettingFormComponent, data: { title: 'Add' } },
      { path: 'edit/:id', component: SettingFormComponent, data: { title: 'Edit' } },
    ],
  },
]
