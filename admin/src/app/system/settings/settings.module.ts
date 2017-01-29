import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../app.shared.module'

import { SettingFormComponent } from './setting-form.component'
import { SettingListComponent } from './setting-list.component'

import { SettingsService } from './settings.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    SettingFormComponent,
    SettingListComponent,
  ],
  providers: [
    SettingsService,
  ],
})
export class SettingsModule {}
