import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Store } from '@ngrx/store'
import { UiService } from '@colmena/colmena-angular-ui'

// import { FormlyFieldConfig } from 'ng-formly'

import { UsersService } from './users.service'

@Component({
  selector: 'app-user-form',
  template: `
    <div class="card">
      <div class="card-header">Add User</div>
      <div class="card-block">
        <ui-form [fields]="fields" [item]="user" (save)="upsert(user)" (close)="close()"></ui-form>
      </div>
    </div>
  `,
})
export class UserFormComponent implements OnInit {

  private domains = []

  public user: any = {}
  public fields = this.service.getFormFields(this.domains)

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service
        .getItem(id)
        .subscribe(res => this.user = res)
      )
  }

  upsert(): void {
    this.service.upsertItem(
      this.user,
      res => {
        this.uiService.toastSuccess('User saved', '')
        console.log(res)
        this.close()
      },
      err => {
        this.uiService.toastError('An error occurred', err.message)
        console.error(err)
      }
    )
  }

  close() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private uiService: UiService,
    public service: UsersService,
    public store: Store<any>,
  ) {
    this.store
      .select('app')
      .subscribe((res: any) => {
        res.domains.map(domain => this.domains.push({ value: domain.id, label: domain.name }))
      })
  }

}
