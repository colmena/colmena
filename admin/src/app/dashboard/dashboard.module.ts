import { NgModule } from '@angular/core'

import { AppSharedModule } from '../app.shared.module'

import { AboutComponent } from './about/about.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const components = [
  AboutComponent,
  DashboardComponent,
]

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class DashboardModule { }
