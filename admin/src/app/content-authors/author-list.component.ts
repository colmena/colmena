import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Author} from '../shared/sdk/models';
import {AuthorApi} from '../shared/sdk/services';

import {AuthorsConfig} from './authors-config';

@Component({
  selector: 'app-authors',
  templateUrl: './author-list.component.html',
})
export class AuthorListComponent implements OnInit {
  private items: Author[];
  private module: AuthorsConfig;

  constructor(private authorApi: AuthorApi) {
    this.module = new AuthorsConfig(authorApi)
  }

  ngOnInit() {
    this.refresh()
  }

  refresh(): void {
    this.authorApi.find().subscribe(res => (this.items = res))
  }

  remove(item: Author): void {
    this.authorApi.deleteById(item.id).subscribe(
      () => this.refresh(),
      err => console.error(err)
    )
  }
}
