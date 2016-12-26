import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { CoreUIModule } from 'coreui-angular/dist'
import { FcUiModule } from '../lib/fc.ui/fc-ui.module'
import { UiModule } from './ui/ui.module'

import { DevModule } from './dev/dev.module'
import { SystemModule } from './system/system.module'

import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    CoreUIModule,
    FcUiModule,
    UiModule,

    DevModule,
    SystemModule,

    appRoutes,
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
