import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { get } from 'lodash'
import { UiService } from '@colmena/admin-ui'
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img *ngIf="item" [src]="item.avatar"
               class="img-fluid rounded float-left mb-2" width="200px"/>
        </div>
        <div class="col-md-8">
          <h3>{{ item.firstName }} {{ item.lastName }}</h3>
          <hr/>
          <span class="float-right lead">{{ item.email }}</span>
        </div>
        <div class="col-md-12">
          <ui-form *ngIf="item" [config]="config" [item]="item" (action)="handleAction($event)"></ui-form>
        </div>
      </div>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  public item: any
  public config: any = {}

  constructor(
    private store: Store<any>,
    private uiService: UiService,
    private service: DashboardService,
  ) { }

  ngOnInit() {
    this.config = this.service.formConfigProfile()
    this.store.select('auth')
      .subscribe((res: any) => this.item = get(res, 'currentUser.user'))
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.item,
          () => {
            this.uiService.toastSuccess(
              'Update Profile Success',
              `Your profile has been ${event.item.id ? 'created' : 'updated '} successfully'`
            )
          },
          err => this.uiService.toastError('Update Profile Fail', err.message)
        )
      default:
        return console.log('Unknown Event Action:', event)
    }
  }
}
