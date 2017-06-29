import { Component, OnInit } from '@angular/core'
import { CoreApi } from '@colmena/admin-lb-sdk'

@Component({
  selector: 'app-system-info',
  template: `
    <div class="card">
      <div class="card-header">Data Sources</div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-6" *ngFor="let ds of dataSources">
            <div class="card" (click)="shown[ds.name] = !shown[ds.name]">
              <div class="card-block">
                <div class="h4 m-a-0">{{ds.name}}</div>
                <div class="p-b-1">{{ds.connector || ds.name}}</div>
                <pre *ngIf="shown[ds.name]">{{ds | json}}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      cursor: pointer;
    }
  `]
})
export class DatasourcesComponent implements OnInit {
  public dataSources: any[] = []
  public shown: {} = {}

  constructor(private coreApi: CoreApi) {
  }

  ngOnInit() {
    this.coreApi.getDatasources()
      .subscribe((res: any) => this.order(res))
  }

  order(items) {
    Object.keys(items).forEach(item => {
      this.dataSources.push(items[item])
    })
  }
}
