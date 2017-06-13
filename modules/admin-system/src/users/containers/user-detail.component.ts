import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { User, UsersService } from '../users.service'
import { NavTabLink } from '../components/user-tabs.component'

@Component({
  selector: 'app-user-detail',
  template: `
    <div class="card">
      <div class="card-header">
        <app-user-header [user]="item?.user"></app-user-header>
        <app-user-tabs [tabs]="tabs"></app-user-tabs>
      </div>
      <div class="card-block">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .card-header {
      padding-bottom: 0;
    }
  `],
})
export class UserDetailComponent implements OnInit {

  public tabs: NavTabLink[] = [
    { icon: 'fa fa-user', title: 'Profile', link: 'profile' },
    { icon: 'fa fa-key', title: 'Password', link: 'password' },
    { icon: 'fa fa-unlock', title: 'Access Tokens', link: 'access-tokens' },
    { icon: 'fa fa-tags', title: 'Roles', link: 'roles' },
  ]

  public item: any

  constructor(
    public service: UsersService,
    public uiService: UiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.item = this.route.snapshot.data.systemUser
    if (!this.item) {
      this.item = new User()
      this.tabs = this.tabs.splice(0, 1)
    }
    this.service.setSelectedUser(this.item)
  }
}
