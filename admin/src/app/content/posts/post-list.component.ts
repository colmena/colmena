import { Component, OnInit } from '@angular/core'

import { PostsService } from './posts.service'

@Component({
  selector: 'app-posts',
  template: '<ui-crud-list [service]="service"></ui-crud-list>',
})
export class PostListComponent implements OnInit {

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    this.service.getItems()
  }

}
