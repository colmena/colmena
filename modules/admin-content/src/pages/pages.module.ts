import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { PagesRoutingModule } from './pages-routing.module'

import { PageComponent } from './components/page.component'
import { PageDetailComponent } from './components/page-detail.component'
import { PageFormComponent } from './components/page-form.component'
import { PageListComponent } from './components/page-list.component'

import { PagesService } from './pages.service'
import { PagesResolver } from './pages.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,
    PagesRoutingModule,
  ],
  declarations: [
    PageComponent,
    PageDetailComponent,
    PageFormComponent,
    PageListComponent,
  ],
  providers: [PagesService, PagesResolver],
})
export class PagesModule {}
