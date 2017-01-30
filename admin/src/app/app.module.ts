// Angular Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

// Third party Modules
import { LoopBackConfig, SDKBrowserModule } from '@lb-sdk'

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
import { AppStoreModule } from './app.store'

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

    AppStoreModule,
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
export class AppModule {

  private defaultConfig = {
    fullcube: {
      baseUrl: 'http://localhost:3000',
      apiVersion: 'api/v1',
    },
  }

  configureLoopBack() {
    const fcConfig = JSON.parse(window.localStorage.getItem('fcConfig')) || this.defaultConfig

    LoopBackConfig.setBaseURL(fcConfig.fullcube.baseUrl)
    LoopBackConfig.setApiVersion(fcConfig.fullcube.apiVersion)
    this.logService.info(`Configure LoopBack: ${fcConfig.fullcube.baseUrl}/${fcConfig.fullcube.apiVersion}`)
  }

  constructor(
    private appService: AppService,
    private logService: LogService,
  ) {
    this.configureLoopBack()
    this.appService.fetchSettings()
    this.appService.fetchDomains()
    this.appService.createSidebar()
  }

}
