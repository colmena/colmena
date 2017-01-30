import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-system-dashboard',
  template: `
    <div class="row">
      <div class="col-md-4" *ngFor="let link of links">
        <div class="card" [routerLink]="link.link">
          <div class="card-block">
            <h1>
              <i class="{{link.icon}}"></i>
              {{link.label}}
            </h1>
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
export class SystemDashboardComponent {

  public links = []

  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('app')
      .subscribe((res: any) => this.links = res.systemDashboard)
  }
}
