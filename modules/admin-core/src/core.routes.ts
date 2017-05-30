import { Routes } from '@angular/router'

import { NotFoundComponent } from './not-found/not-found.component'
import { RouterComponent } from './router/router.component'

export const CoreModuleRoutes: Routes = [ {
  path: '',
  children: [
    { path: 'not-found', component: NotFoundComponent },
    { path: 'router', component: RouterComponent },
  ],
} ]

