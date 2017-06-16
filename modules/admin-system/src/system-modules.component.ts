import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'

import { SystemApi } from '@colmena/admin-lb-sdk'

@Component({
  selector: 'app-system-modules',
  template: `
    <div class="card">
      <div class="card-header">Angular Modules</div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-6" *ngFor="let module of modules.angular">
            <ui-dashboard-icon
              [count]="module.name"
              [icon]="module.icon"
              [label]="module.packageName"
              [type]="'success'">
            </ui-dashboard-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">LoopBack Modules</div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-6" *ngFor="let module of modules.loopback">
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
  public modules = {
    angular: [],
    loopback: [],
  }

  constructor(
    private systemApi: SystemApi,
    private store: Store<any>,
  ) {
  }

  ngOnInit() {
    this.getData()
    this.store.select('app')
      .subscribe((res: any) => {
        console.log('res.modules', res.modules)
        Object.keys(res.modules).forEach(module => this.modules.angular.push(res.modules[module]))
      })
  }

  getData() {
    this.systemApi.modules().subscribe(res => this.modules.loopback = res)
  }
}
