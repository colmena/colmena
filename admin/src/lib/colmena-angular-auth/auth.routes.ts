import { Routes } from '@angular/router'

import { LoginComponent } from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import { RegisterComponent } from './components/register/register.component'

export const AuthRoutes: Routes = [ {
  path: '',
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
  ],
} ]
