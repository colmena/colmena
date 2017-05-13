import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-icon',
  template: `
    <div class="card">
      <div class="card-block p-1 clearfix">
        <i class="{{icon}} bg-{{type}} p-1 font-2xl mr-1 pull-left"></i>
        <div class="text-muted text-uppercase font-weight-bold font-xs">{{label}}</div>
        <div class="h5 text-primary mb-0 mt-h">{{count}}</div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      cursor: pointer;
    }
    .card:hover {
      box-shadow: 0px 0px 8px #a1a1a1;
    }
  `]
})
export class UiDashboardIconComponent {

  @Input() count
  @Input() icon
  @Input() label
  @Input() type

}
