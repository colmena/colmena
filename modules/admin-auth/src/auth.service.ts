import { Injectable } from '@angular/core'
import { User, AccessToken, UserApi } from '@colmena/admin-lb-sdk'
import { Observable } from 'rxjs/Observable'
import 'rxjs/observable/of'

@Injectable()
export class AuthService {

  private user: User = new User()
  private token: AccessToken = new AccessToken()

  constructor(
    private userApi: UserApi,
  ) {
  }

  getDomainId() {
    return this.user.realm || null
  }

  login(credentials) {
    return this.userApi.login(credentials)
  }

  logout() {
    if (this.isAuthenticated()) {
      console.log('Logging out...')
      window.localStorage.removeItem('token')
      return this.userApi.logout()
    } else {
      console.log('Already logged out...')
      return Observable.of({})
    }
  }

  recover(user: any) {
    this.userApi.resetPassword(user)
      .subscribe(
        (success) => console.log({type: 'AUTH_RECOVER_SUCCESS', payload: user }),
        (error) => console.log({type: 'AUTH_RECOVER_ERROR', payload: error }),
      )
  }

  reset(user: any) {
    this.userApi.doPasswordReset({}, {}, user)
      .subscribe(
        (success) => console.log({ type: 'AUTH_RESET_SUCCESS', payload: success }),
        (error) => console.log({ type: 'AUTH_RESET_ERROR', payload: error }))
  }

  register(credentials) {
    return this.userApi.create(credentials)
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
