import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { AuthRoutingModule } from './auth-routes.module'

import { AuthService } from './auth.service'

import { LoginComponent } from './components/login.component'
import { LogoutComponent } from './components/logout.component'
import { RecoverComponent } from './components/recover.component'
import { RegisterComponent } from './components/register.component'
import { ResetComponent } from './components/reset.component'

import { SocialLoginComponent } from './components/social-login.component'

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
    SocialLoginComponent,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
