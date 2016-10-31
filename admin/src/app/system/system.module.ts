import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {AboutModule}              from '../system-about/about.module';
import {DashboardModule}          from '../system-dashboard/dashboard.module';
import {DevModule}                from '../system-dev/dev.module';
import {DomainsModule}            from '../system-domains/domains.module';
import {SettingsModule}           from '../system-settings/settings.module';
import {UsersModule}              from '../system-users/users.module';

import {SystemRoutingModule}      from './system-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AboutModule,
    DashboardModule,
    DevModule,
    DomainsModule,
    SettingsModule,
    SystemRoutingModule,
    UsersModule,
  ]
})
export class SystemModule {
}
