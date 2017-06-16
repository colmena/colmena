import { Routes } from '@angular/router'

import { SettingListComponent } from './containers/setting-list.component'
import { SettingDetailComponent } from './containers/setting-detail.component'
import { SettingFormComponent } from './components/setting-form.component'

import { SystemSettingResolver } from './settings.resolvers'

export const SystemSettingsRoutes: Routes = [
  {
    path: 'settings',
    data: { title: 'Settings' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: SettingListComponent,
        data: { title: 'List' },
      },
      {
        path: 'create',
        component: SettingDetailComponent,
        data: { title: 'Create' },
        children: [
          {
            path: '',
            component: SettingFormComponent,
          },
        ],
      },
      {
        path: ':id',
        component: SettingDetailComponent,
        resolve: {
          systemSetting: SystemSettingResolver,
        },
        data: { title: 'setting' },
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          {
            path: 'edit',
            component: SettingFormComponent,
            data: { title: 'Edit' },
          },
        ],
      },
    ],
  },
]
