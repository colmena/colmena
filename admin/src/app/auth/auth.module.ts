import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { UiModule } from '../ui/ui.module'

import { AuthService } from './auth.service'

import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { RegisterComponent } from './register/register.component'
import { RouterComponent } from './router/router.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UiModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    RegisterComponent,
    RouterComponent,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
