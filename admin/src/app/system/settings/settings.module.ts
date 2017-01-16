import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { UiModule } from '../../ui/ui.module'

import { SettingsService } from './settings.service'

import { SettingFormComponent } from './setting-form.component'
import { SettingListComponent } from './setting-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
  ],
  declarations: [
    SettingFormComponent,
    SettingListComponent,
  ],
  providers: [
    SettingsService,
  ],
})
export class SettingsModule {
}
