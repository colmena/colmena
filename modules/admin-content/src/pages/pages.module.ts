import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { PageComponent } from './components/page.component'
import { PageFormComponent } from './components/page-form.component'

import { PageDetailComponent } from './containers/page-detail.component'
import { PageListComponent } from './containers/page-list.component'

import { PagesService } from './pages.service'
import { PagesResolver } from './pages.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,
    RouterModule,
  ],
  declarations: [
    PageComponent,
    PageFormComponent,

    PageDetailComponent,
    PageListComponent,
  ],
  providers: [PagesService, PagesResolver],
})
export class PagesModule { }
