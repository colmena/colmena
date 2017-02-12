import { Component, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UiService } from '@colmena/colmena-angular-ui'
import { Store } from '@ngrx/store'

import { UsersService } from './users.service'

@Component({
  selector: 'app-users',
  template: `
    <ui-modal-form #form>
      <ui-form [config]="config" [item]="item" (action)="action($event)"></ui-form>
    </ui-modal-form>

    <ui-modal #view title="View Item">
      <pre>{{item | json}}</pre>
    </ui-modal>

    <template #iconTemplate let-item="item">
      <div class="card-block" style="min-height: 200px">
        <h6 style="text-decoration: underline; cursor: pointer;" (click)="action({ action: 'view', item: item })">
          <i class="icon-pencil"></i> {{item.name}}
        </h6>
        <p class="text-muted" *ngIf="item.description">{{item.description}}</p>
      </div>
    </template>

    <ui-data-grid #grid (action)="action($event)" [iconTemplate]="iconTemplate" [service]="service"></ui-data-grid>
  `,
})
export class UsersComponent {

  @ViewChild('grid') private grid
  @ViewChild('form') private form
  @ViewChild('view') private view

  public item: any = {}
  public config: any = {}

  save(item): void {
    this.service.upsertItem(
      item,
      (res) => {
        this.uiService.toastSuccess('Post saved', res.name)
        this.close()
        this.refresh()
      },
      err => console.error(err)
    )
  }

  close(): void {
    this.form.hide()
  }

  refresh(): void {
    this.grid.refreshData()
  }

  constructor(
    public service: UsersService,
    public uiService: UiService,
    private route: ActivatedRoute,
    private store: Store<any>,
  ) {
    this.config = {
      icon: this.service.icon,
      showCancel: true,
      fields: this.service.formFields,
    }
    this.store
      .select('app')
      .subscribe((res: any) => {
        res.domains.map(domain => this.service.domains.push({ value: domain.id, label: domain.name }))
      })
  }

  action(event) {
    switch (event.action) {
      case 'edit':
        this.item = Object.assign({}, event.item)
        this.form.title = `Edit: ${this.item.name}`
        this.form.show()
        break
      case 'add':
        this.item = Object.assign({}, { title: null, content: null })
        this.form.title = 'Add Post'
        this.form.show()
        break
      case 'view':
        this.item = event.item
        this.form.title = `${this.item.name}`
        this.view.show()
        break
      case 'cancel':
        this.close()
        break
      case 'save':
        this.save(event.item)
        break
      case 'delete':
        const successCb = () => this.service
          .deleteItem(event.item.id,
            () => this.refresh(),
            (err) => this.uiService.toastError('Error deleting item', err.message))

        this.uiService.alertQuestion(
          {
            title: 'Are you sure?',
            text: 'The action can not be undone.'
          },
          successCb,
          () => ({})
        )
        break
      default:
        console.log('Unknown event action', event)
        break
    }
  }


}
