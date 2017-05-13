import { NgModule } from '@angular/core'

import { AppSharedModule } from '../app.shared.module'

import { NotFoundComponent } from './not-found/not-found.component'
import { RouterComponent } from './router/router.component'

const components = [
  NotFoundComponent,
  RouterComponent,
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
export class CoreModule { }
