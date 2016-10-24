import {NgModule}                 from '@angular/core';
import {
  Routes,
  RouterModule
}             from '@angular/router';

// Layouts
import {FullLayoutComponent}      from './system-layouts/full-layout.component';
import {SimpleLayoutComponent}    from './system-layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [{
      path: '',
      loadChildren: 'app/system/system.module#SystemModule'
    }, {
      path: 'content',
      loadChildren: 'app/content/content.module#ContentModule'
    }]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: 'app/system-pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
