import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-detail',
  template: `
    <ui-page [tabs]="tabs">
      <header>
        <app-user-header [user]="item?.user"></app-user-header>
      </header>
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class UserDetailComponent implements OnInit {

  public tabs: UiTabLink[] = [
    { icon: 'fa fa-user', title: 'Profile', link: 'profile' },
    { icon: 'fa fa-key', title: 'Password', link: 'password' },
    { icon: 'fa fa-unlock', title: 'Access Tokens', link: 'access-tokens' },
    { icon: 'fa fa-tags', title: 'Roles', link: 'roles' },
  ]

  public item: any = {}

  constructor(
    public service: UsersService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.item = this.route.snapshot.data.systemUser

    if (!this.item) {
      this.tabs = [
        { icon: 'fa fa-plus', title: 'Create', link: '' },
      ]
    }
    this.service.setSelectedUser(this.item)
  }
}
