import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {DomainsService} from './domains.service';

@Component({
  selector: 'app-domain-form',
  template: '<ui-crud-form [service]="service" (submit)="upsert()"></ui-crud-form>'
})
export class DomainFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: DomainsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

  upsert(): void {
    this.service.upsertItem(
      res => this.router.navigate(['../'], {relativeTo: this.route}),
      err => console.error(err)
    )
  }

}
