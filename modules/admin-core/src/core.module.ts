import { NgModule } from '@angular/core'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { NotFoundComponent } from './not-found/not-found.component'
import { RouterComponent } from './router/router.component'

const components = [
  NotFoundComponent,
  RouterComponent,
]

@NgModule({
  imports: [
    ColmenaUiModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class CoreModule { }
