import { Component, OnInit } from '@angular/core'

import { SystemApi } from '@colmena/admin-lb-sdk'

@Component({
  selector: 'app-system-modules',
  template: `
    <div class="card">
      <div class="card-header">Server Modules</div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-6" *ngFor="let module of modules">
            <ui-dashboard-icon
              [count]="module.version"
              [icon]="'icon-present'"
              [label]="module.name"
              [type]="'success'">
            </ui-dashboard-icon>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SystemModulesComponent implements OnInit {
  public modules = []

  constructor(private systemApi: SystemApi) {
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.systemApi.modules().subscribe(res => this.modules = res)
  }
}
