import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'

@Component({
  selector: 'app-system-modules',
  template: `
    <div class="card">
      <div class="card-header">Admin Modules</div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-6" *ngFor="let module of modules">
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
  `,
})
export class AdminModulesComponent implements OnInit {
  public modules = []

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select('app').subscribe((res: any) => {
      Object.keys(res.modules).forEach(module => this.modules.push(res.modules[module]))
    })
  }
}
