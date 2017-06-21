import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './components/login.component'
import { LogoutComponent } from './components/logout.component'
import { RecoverComponent } from './components/recover.component'
import { RegisterComponent } from './components/register.component'
import { ResetComponent } from './components/reset.component'
import { SocialLoginComponent } from './components/social-login.component'

export const routes: Routes = [ {
  path: '',
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'password-recover', component: RecoverComponent },
    { path: 'password-reset', component: ResetComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'social-login', component: SocialLoginComponent },
  ],
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
