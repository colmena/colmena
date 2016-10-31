import {NgModule}                     from '@angular/core';
import {BrowserModule}                from '@angular/platform-browser';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy
}         from '@angular/common';

import {FormsModule}                  from '@angular/forms';
import {HttpModule}                   from '@angular/http';

import {AppComponent}                 from './app.component';
import {Ng2BootstrapModule}           from 'ng2-bootstrap/ng2-bootstrap';
import {NAV_DROPDOWN_DIRECTIVES}      from './shared/nav-dropdown.directive';

import {ChartsModule}                 from 'ng2-charts/ng2-charts';
import {SIDEBAR_TOGGLE_DIRECTIVES}    from './shared/sidebar.directive';
import {AsideToggleDirective}         from './shared/aside.directive';
import {BreadcrumbsComponent}         from './shared/breadcrumb.component';
import {SDKModule}                    from './shared/sdk';
import {ToastyModule}                 from 'ng2-toasty';


// Routing Module
import {AppRoutingModule}             from './app.routing';

// Layouts
import {FullLayoutComponent}          from './system-layouts/full-layout.component';
import {SimpleLayoutComponent}        from './system-layouts/simple-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2BootstrapModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SDKModule.forRoot(),
    ToastyModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent],
  exports: [
    ToastyModule
  ]
})
export class AppModule {
}
