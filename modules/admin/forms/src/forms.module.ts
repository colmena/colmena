import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { FormsRoutingModule } from './forms-routing.module'
import { FormsService } from './forms.service'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { ItemsComponent } from './components/items.component'
import { FormComponent } from './components/form.component'
import { FormDetailComponent } from './components/form-detail.component'
import { FormFormComponent } from './components/form-form.component'
import { FormListComponent } from './components/form-list.component'
import { DomainResolver, FormsResolver } from './forms.resolvers'

import { FormBuilderModule } from './form-builder/form-builder.module'
import { FormBuilderComponent } from './components/form-builder.component'

@NgModule({
  imports: [
    CommonModule,
    ColmenaUiModule,
    FormsRoutingModule,

    FormBuilderModule,
  ],
  providers: [
    FormsService,
    FormsResolver,
    DomainResolver,
  ],
  declarations: [
    AboutComponent,
    DashboardComponent,
    IndexComponent,
    ItemsComponent,

    FormComponent,
    FormBuilderComponent,
    FormDetailComponent,
    FormFormComponent,
    FormListComponent,

  ],
})
export class FormsModule { }
