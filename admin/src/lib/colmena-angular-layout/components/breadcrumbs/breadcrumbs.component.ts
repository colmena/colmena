import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import 'rxjs/add/operator/filter'

@Component({
  selector: 'layout-breadcrumbs',
  template: `
    <template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
        <li class="breadcrumb-item" *ngIf="breadcrumb.label.title" [ngClass]="{active: last}">
        <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
        <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
    </template>
    &nbsp;
`
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Array<Object>

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(() => {
      this.breadcrumbs = []
      let currentRoute: any = this.route.root,
        url: any = ''
      do {
        let childrenRoutes: any = currentRoute.children
        currentRoute = null
        childrenRoutes.forEach((route: any) => {
          if (route.outlet === 'primary') {
            let routeSnapshot: any = route.snapshot
            url += '/' + routeSnapshot.url.map((segment: any) => segment.path).join('/')
            this.breadcrumbs.push({
              label: route.snapshot.data,
              url: url
            })
            currentRoute = route
          }
        })
      } while (currentRoute)
    })
  }
}
