import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// import { AboutComponent } from './components/about.component'
// import { DashboardComponent } from './components/dashboard.component'
// import { IndexComponent } from './components/index.component'
// import { ItemsComponent } from './components/items.component'
import { FormListComponent } from './components/form-list.component'
import { FormDetailComponent } from './components/form-detail.component'
import { FormFormComponent } from './components/form-form.component'
import { DomainResolver, FormsResolver } from './forms.resolvers'
import { FormBuilderComponent } from './components/form-builder.component'

const routes: Routes = [
  {
    path: '',
    data: { title: 'Forms' },
    resolve: { domain: DomainResolver },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: FormListComponent,
        data: { title: 'List' },
      },
      {
        path: 'create',
        component: FormDetailComponent,
        data: { title: 'Create' },
        children: [
          {
            path: '',
            component: FormFormComponent,
          },
        ],
      },
      {
        path: ':id',
        component: FormDetailComponent,
        resolve: {
          domain: DomainResolver,
          form: FormsResolver,
        },
        data: { title: 'Form' },
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          {
            path: 'edit',
            component: FormFormComponent,
            data: { title: 'Edit' },
          },
          {
            path: 'builder',
            component: FormBuilderComponent,
            data: { title: 'Builder' },
          },
        ],
      },
    ],
  },

  // {
  // path: '',
  // data: {
  //   title: 'Forms',
  // },
  // children: [
  //   { path: '', component: IndexComponent, children: [
  //     { path: '', redirectTo: 'index', pathMatch: 'full' },
  //     { path: 'index', component: DashboardComponent, data: { title: 'Dashboard' } },
  //     { path: 'items', component: ItemsComponent, data: { title: 'Items' } },
  //     { path: 'about', component: AboutComponent, data: { title: 'About' } },
  //   ]}
  // ]
// }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
