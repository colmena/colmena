import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {SettingsRoutingModule}     from './settings-routing.module';

import {SettingDetailsComponent}   from './setting-details.component';
import {SettingFormComponent}      from './setting-form.component';
import {SettingListComponent}      from './setting-list.component';
import {UiModule}                 from '../ui/ui.module';
import {SettingsService} from './settings.service';

@NgModule({
  imports: [
    SettingsRoutingModule,
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    SettingDetailsComponent,
    SettingFormComponent,
    SettingListComponent,
  ],
  providers: [
    SettingsService,
  ]
})
export class SettingsModule {
}
