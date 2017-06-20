import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { PostsService } from '../posts.service'

@Component({
  selector: 'app-post-detail',
  template: `
    <ui-page [tabs]="tabs" [title]="item ? item.title : 'Add New Post'">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class PostDetailComponent implements OnInit {
  public tabs: UiTabLink[] = [
    { icon: 'fa fa-pencil', title: 'Edit', link: 'edit' },
  ]

  public item: any

  constructor(private service: PostsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.item = this.route.snapshot.data.post

    if (!this.item) {
      this.tabs = [{ icon: 'fa fa-plus', title: 'Create', link: '' }]
    }
    this.service.setSelectedPost(this.item)
  }
}
