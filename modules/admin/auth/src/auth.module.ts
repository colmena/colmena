import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { AuthService } from './auth.service'

import { LoginComponent } from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import { RecoverComponent } from './components/recover/recover.component'
import { RegisterComponent } from './components/register/register.component'
import { ResetComponent } from './components/reset/reset.component'

import { AuthRoutingModule } from './auth-routes.module'

@NgModule({
  imports: [
    FormsModule,
    ColmenaUiModule,

    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RecoverComponent,
    RegisterComponent,
    ResetComponent,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
