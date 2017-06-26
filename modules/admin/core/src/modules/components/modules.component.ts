import { Component, OnInit } from '@angular/core'
import { ModulesService} from '../modules.service'

@Component({
  template: `
    <div class="card" *ngFor="let module of modules">
      <div class="card-header">
        <h5>
          {{module.name}}
          <small>{{module.version}}</small>
        </h5>
      </div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-6">
            <app-modules-models [module]="module"></app-modules-models>
          </div>
          <div class="col-md-6">
            <app-modules-sample-data [module]="module"></app-modules-sample-data>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ModulesComponent implements OnInit {

  public modules = []

  constructor(
    private service: ModulesService,
  ) {
  }

  ngOnInit() {
    this.service.getModules()
      .subscribe(res => this.modules = res)
  }
}
