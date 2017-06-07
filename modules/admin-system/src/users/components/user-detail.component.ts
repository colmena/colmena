import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { UsersService } from '../users.service'
import { NavTabLink } from './user-tabs.component'

@Component({
  selector: 'app-user-detail',
  template: `
    <div class="card">
      <div class="card-header">
        <app-user-header [user]="service.selectedUser"></app-user-header>
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
    { icon: 'user', title: 'Profile', link: 'profile' },
    { icon: 'key', title: 'Password', link: 'password' },
    { icon: 'unlock', title: 'Access Tokens', link: 'access-tokens' },
    { icon: 'tags', title: 'Roles', link: 'roles' },
  ]

  constructor(
    public service: UsersService,
    public uiService: UiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let user = this.route.snapshot.data.systemUser
    console.log(user)
    this.service.setSelectedUser(user)
  }

}
