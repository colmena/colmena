import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';
import {TabsModule}               from 'ng2-bootstrap/ng2-bootstrap';
import {KeysPipe}                 from '../keys.pipe';

import {AboutComponent}           from './about.component';
import {AboutRoutingModule}       from './about-routing.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    CommonModule,
    FormsModule,
    TabsModule
  ],
  declarations: [
    AboutComponent,
    KeysPipe
  ]
})
export class AboutModule {
}
