import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AuthRoutesModule } from './auth.routes'

import { AuthService } from './auth.service'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutesModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
