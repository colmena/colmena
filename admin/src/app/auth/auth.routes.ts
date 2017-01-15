import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const AuthRoutes: Routes = [ {
  path: '',
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ],
} ]
@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthRoutesModule {}
