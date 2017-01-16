import { Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { RegisterComponent } from './register/register.component'
import { RouterComponent } from './router/router.component'

export const AuthRoutes: Routes = [ {
  path: '',
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'router', component: RouterComponent },
    { path: 'not-found', component: NotFoundComponent },

  ],
} ]
