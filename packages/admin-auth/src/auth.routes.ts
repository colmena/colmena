import { Routes } from '@angular/router'

import { LoginComponent } from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import { RecoverComponent } from './components/recover/recover.component'
import { RegisterComponent } from './components/register/register.component'
import { ResetComponent } from './components/reset/reset.component'

export const AuthRoutes: Routes = [ {
  path: '',
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'password-recover', component: RecoverComponent },
    { path: 'password-reset', component: ResetComponent },
    { path: 'register', component: RegisterComponent },
  ],
} ]
