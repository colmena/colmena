import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SettingListComponent } from './components/setting-list.component'
import { SettingDetailComponent } from './components/setting-detail.component'
import { SettingFormComponent } from './components/setting-form.component'

import { SettingResolver } from './settings.resolvers'

export const SystemSettingsRoutes: Routes = [
  {
    path: '',
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
          systemSetting: SettingResolver,
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
@NgModule({
  imports: [ RouterModule.forChild(SystemSettingsRoutes) ],
  exports: [ RouterModule ]
})
export class SettingsRoutingModule {}
