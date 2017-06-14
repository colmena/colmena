import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { SettingDetailComponent } from './containers/setting-detail.component'
import { SettingFormComponent } from './components/setting-form.component'
import { SettingHeaderComponent } from './components/setting-header.component'
import { SettingListComponent } from './containers/setting-list.component'
import { SettingTabsComponent } from './components/setting-tabs.component'

import { SettingsService } from './settings.service'
import { SystemSettingResolver } from './settings.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,
    RouterModule,
  ],
  declarations: [
    SettingDetailComponent,
    SettingFormComponent,
    SettingHeaderComponent,
    SettingListComponent,
    SettingTabsComponent,
  ],
  providers: [
    SettingsService,
    SystemSettingResolver,
  ],
})
export class SystemSettingsModule { }
