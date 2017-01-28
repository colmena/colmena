import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

import { SettingsService } from './settings.service'

import { SettingFormComponent } from './setting-form.component'
import { SettingListComponent } from './setting-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColmenaUiModule,
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
