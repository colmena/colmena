import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SettingsService} from './settings.service';

@Component({
  selector: 'app-setting-details',
  template: '<ui-crud-details [service]="service"></ui-crud-details>'
})
export class SettingDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SettingsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}
