import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {DomainsService} from './domains.service';

@Component({
  selector: 'app-domain-details',
  template: '<ui-crud-details [service]="service"></ui-crud-details>'
})
export class DomainDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DomainsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}
