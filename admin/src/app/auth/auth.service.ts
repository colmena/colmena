import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User, AccessToken, UserApi } from '@lb-sdk'


@Injectable()
export class AuthService {

  private user: User = new User()
  private token: AccessToken = new AccessToken()

  constructor(
    private userApi: UserApi, private router: Router
  ) {
  }

  getDomainId() {
    return this.user.realm || null
  }

  login(credentials) {
    return this.userApi.login(credentials)
  }

  isAuthenticated() {
    if (!this.user.id && window.localStorage.getItem('token')) {
      this.token = JSON.parse(window.localStorage.getItem('token'))
      this.user = this.token.user
    }
    return this.user.id ? this.user : false
  }

  setToken(token) {
    window.localStorage.setItem('token', JSON.stringify(token))
    return new Promise(resolve => {
      this.token = token
      this.user = token.user
      resolve(this.user)
    })
  }

}
