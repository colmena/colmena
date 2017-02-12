import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-content-dashboard',
  template: `
    <div class="row">
      <div class="col-md-3" *ngFor="let link of links">
        <ui-card [routerLink]="link.link">
          <ui-card-header>
            <h4> <i class="{{link.icon}}"></i> &nbsp; {{link.label}} </h4>
          </ui-card-header>
        </ui-card>
      </div>
    </div>
  `,
  styles: [`
    ui-card { 
      cursor: pointer;
    }
    ui-card h4 { 
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
