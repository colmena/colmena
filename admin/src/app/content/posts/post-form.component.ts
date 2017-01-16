import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { PostsService } from './posts.service'

@Component({
  selector: 'app-post-form',
  template: '<ui-crud-form [service]="service" (submit)="upsert()"></ui-crud-form>',
})
export class PostFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: PostsService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params[ 'id' ])
      .subscribe((id) => this.service.getItem(id))
  }

  upsert(): void {
    console.log('upsert')
    this.service.upsertItem(
      res => this.router.navigate([ '../' ], { relativeTo: this.route }),
      err => console.error(err)
    )
  }

}
