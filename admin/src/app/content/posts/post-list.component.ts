import { Component, ViewChild } from '@angular/core'

import { PostsService } from './posts.service'
import { UiService } from '@colmena/colmena-angular-ui'

@Component({
  selector: 'app-posts',
  template: `
    <ui-modal #form>
      <app-post-form [item]="item" (save)="save($event)" (close)="close()"></app-post-form>
    </ui-modal>
    <ui-modal #view title="View Item">
      <pre>{{item | json}}</pre>
    </ui-modal>
    <template #iconTemplate let-item="item">
      <div class="card-block" style="min-height: 200px">
        <h6 style="text-decoration: underline; cursor: pointer;" (click)="action({ action: 'view', item: item })">
          <i class="icon-calendar"></i> {{item.name}}
        </h6>
        <div class="text-muted" *ngIf="item.date">Date: {{item.date | date: 'short' }}</div>
        <div class="text-muted" *ngIf="item.location">Location {{item.location}}</div>
      </div>
    </template>
    <ui-data-grid #grid (action)="action($event)" [iconTemplate]="iconTemplate" [service]="service"></ui-data-grid>
  `,
})
export class PostListComponent {

  @ViewChild('grid') private grid
  @ViewChild('form') private form
  @ViewChild('view') private view

  public item: any = {}

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
    public service: PostsService,
    public uiService: UiService,
  ) {
  }

  action(event) {
    switch (event.action) {
      case 'edit':
        this.item = Object.assign({}, event.item)
        this.form.title = `Edit: ${this.item.name}`
        this.form.show()
        break
      case 'add':
        this.item = {}
        this.form.title = 'Add Post'
        this.form.show()
        break
      case 'view':
        this.item = event.item
        this.form.title = `${this.item.name}`
        this.view.show()
        break
      case 'delete':
        const successCb = () => this.service
          .postApi
          .deleteById(event.item.id)
          .subscribe(() => this.refresh())

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
