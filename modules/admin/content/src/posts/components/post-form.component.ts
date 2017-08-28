import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { ContentPost, PostsService } from '../posts.service'

@Component({
  selector: 'app-post-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
      </div>
      <div class="col-md-6">
        <app-content-post [item]="item"></app-content-post>
      </div>
    </div>
  `,
})
export class PostFormComponent implements OnInit {
  public formConfig: any = {}
  public item: any

  constructor(
    private service: PostsService,
    private ui: UiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.item = this.service.selectedPost || new ContentPost()
    this.formConfig = this.service.getFormConfig()
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service
          .upsertItem(
            event.item,
            () => {
              this.ui.alerts.toastSuccess(
                'Save Post Success',
                `<u>${event.item.name}</u> has been saved successfully`
              )
            },
            err => this.ui.alerts.toastError('Save Post Fail', err.message)
          )
          .add(() => this.handleAction({ action: 'cancel' }))
      case 'cancel':
        return this.router.navigate(['/content/posts'])
      default:
        return console.log('Unknown event action:', event)
    }
  }
}
