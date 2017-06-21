import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'

import * as auth from '../state/auth.actions'

@Component({
  template: `
    <ui-message message="Social Login"></ui-message>
  `,
})
export class SocialLoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(payload => {
      this.store.dispatch({ type: auth.ActionTypes.AUTH_SOCIAL_LOGIN, payload })
    })
  }
}
