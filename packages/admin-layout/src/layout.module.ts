import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ng2-bootstrap'

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { HeaderDomainsComponent } from './components/header/header-domains.component'
import { HeaderNavComponent } from './components/header/header-nav.component'
import { HeaderUserComponent } from './components/header/header-user.component'
import { MainComponent } from './components/main/main.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { SimpleLayoutComponent } from './components/layout/simple-layout.component'
import { FullLayoutComponent } from './components/layout/full-layout.component'
import { AsideToggleDirective } from './directives/aside/aside.directives'
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav/nav.directives'
import {
  MobileSidebarToggleDirective,
  SidebarToggleDirective,
  SidebarOffCanvasCloseDirective
} from './directives/sidebar/sidebar.directives'

export const components: any[] = [
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
  HeaderDomainsComponent,
  HeaderNavComponent,
  HeaderUserComponent,
  MainComponent,
  SidebarComponent,

  SimpleLayoutComponent,
  FullLayoutComponent,
]

export const directives: any[] = [
  AsideToggleDirective,
  MobileSidebarToggleDirective,
  NavDropdownDirective,
  NavDropdownToggleDirective,
  SidebarToggleDirective,
  SidebarOffCanvasCloseDirective,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    BsDropdownModule,
  ],
  declarations: [
    ...components,
    ...directives,
  ],
  exports: [
    ...components,
    ...directives,
  ]
})
export class ColmenaLayoutModule { }
