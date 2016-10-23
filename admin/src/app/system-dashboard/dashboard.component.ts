import {Component}    from '@angular/core';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  private contentWidgets = [{
    label: 'Authors',
    icon: 'icon-people',
    count: '∞',
    class: 'bg-primary',
    link: '/content/authors'
  }, {
    label: 'Events',
    icon: 'icon-calendar',
    count: '∞',
    class: 'bg-info',
    link: '/content/events'
  }, {
    label: 'Posts',
    icon: 'icon-pencil',
    count: '∞',
    class: 'bg-warning',
    link: '/content/posts'
  }, {
    label: 'Products',
    icon: 'icon-basket',
    count: '∞',
    class: 'bg-danger',
    link: '/content/products'
  }];

  private systemWidgets = [{
    label: 'Domains',
    icon: 'icon-globe',
    count: '∞',
    class: 'bg-success',
    link: '/domains'
  }, {
    label: 'Settings',
    icon: 'icon-settings',
    count: '∞',
    class: 'bg-warning',
    link: '/settings'
  }, {
    label: 'Users',
    icon: 'icon-people',
    count: '∞',
    class: 'bg-primary',
    link: '/users'
  }, {
    label: 'About',
    icon: 'icon-info',
    count: '',
    class: 'bg-info',
    link: '/about'
  }];

}
