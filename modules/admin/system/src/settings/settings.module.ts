import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { SettingsRoutingModule } from './settings-routing.module'

import { SettingDetailComponent } from './components/setting-detail.component'
import { SettingFormComponent } from './components/setting-form.component'
import { SettingHeaderComponent } from './components/setting-header.component'
import { SettingListComponent } from './components/setting-list.component'

import { SettingsService } from './settings.service'
import { SystemSettingResolver } from './settings.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,

    SettingsRoutingModule,
  ],
  declarations: [
    SettingDetailComponent,
    SettingFormComponent,
    SettingHeaderComponent,
    SettingListComponent,
  ],
  providers: [
    SettingsService,
    SystemSettingResolver,
  ],
})
export class SystemSettingsModule { }
