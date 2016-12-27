import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { SettingsService } from './settings.service'

@Component({
  selector: 'app-setting-form',
  template: '<ui-crud-form [service]="service" (submit)="upsert()"></ui-crud-form>',
})
export class SettingFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: SettingsService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params[ 'id' ])
      .subscribe((id) => this.service.getItem(id))
  }

  upsert(): void {
    this.service.upsertItem(
      res => this.router.navigate([ '../' ], { relativeTo: this.route }),
      err => console.error(err)
    )
  }

}
