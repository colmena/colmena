import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-content-dashboard',
  template: `
    <div class="row">
      <div class="col-md-4" *ngFor="let link of links">
        <ui-card [routerLink]="link.link">
          <ui-card-header>
            <h3> <i class="{{link.icon}}"></i> &nbsp; {{link.label}} </h3>
          </ui-card-header>
        </ui-card>
      </div>
    </div>
  `,
  styles: [`
    ui-card { 
      cursor: pointer;
    }
    ui-card h3 { 
      margin: 0;
    }
  `]
})
export class ContentDashboardComponent {

  public links = []

  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('app')
      .subscribe((res: any) => this.links = res.contentDashboard)
  }
}
