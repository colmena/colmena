import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

import { AuthService } from './auth.service'

import { LoginComponent } from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import { RegisterComponent } from './components/register/register.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ColmenaUiModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
  ],
  providers: [
    AuthService,
  ]
})
export class ColmenaAuthModule { }
