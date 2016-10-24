import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Author} from '../shared/sdk/models';
import {AuthorApi} from '../shared/sdk/services';

import {AuthorsConfig} from './authors-config'

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html'
})
export class AuthorFormComponent implements OnInit {

  private item: Author = new Author();
  private module: AuthorsConfig;

  constructor(private authorApi: AuthorApi,
              private route: ActivatedRoute,
              private router: Router) {
    this.module = new AuthorsConfig(authorApi)
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        if (id) {
          this.authorApi.findById(id).subscribe(res => this.item = res)
        }
      });
  }

  upsert(): void {
    this.authorApi.upsert(this.item).subscribe(
      res => this.router.navigate(['../'], {relativeTo: this.route}),
      err => console.error(err)
    )
  }

}
