// Angular Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

// Third party Modules
import { SDKBrowserModule } from '@lb-sdk'

import { ColmenaAuthModule } from '@colmena/colmena-angular-auth'
import { ColmenaLayoutModule } from '@colmena/colmena-angular-layout'
import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

// Local Modules
import { ContentModule } from './content/content.module'
import { CoreModule } from './core/core.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { DevModule } from './dev/dev.module'
import { SystemModule } from './system/system.module'

// Local Components/Routes/Services
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { AppService } from './app.service'
import { LogService } from './log.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    SDKBrowserModule.forRoot(),
    ColmenaAuthModule,
    ColmenaLayoutModule,
    ColmenaUiModule,

    ContentModule,
    CoreModule,
    DashboardModule,
    DevModule,
    SystemModule,

    appRoutes,
  ],
  providers: [
    AppService,
    LogService,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
