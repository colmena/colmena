import { NgModule } from '@angular/core'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AboutComponent } from './about/about.component'
import { BrowserModule } from '@angular/platform-browser'
import { FcUiModule } from '../../lib/fc.ui/fc-ui.module'

const components = [
  AboutComponent,
  DashboardComponent,
]

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    BrowserModule,
    FcUiModule,
  ]
})
export class SystemModule { }
