import {Component}                  from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {

  private navItems = [
    {type: 'item',    label: 'Dashboard', icon: 'icon-speedometer', link: '/dashboard'},
    {type: 'divider'},
    {type: 'title',   label: 'Content'},
    {type: 'item',    label: 'Authors',   icon: 'icon-people',      link: '/content/authors'},
    {type: 'item',    label: 'Events',    icon: 'icon-calendar',    link: '/content/events'},
    {type: 'item',    label: 'Posts',     icon: 'icon-pencil',      link: '/content/posts'},
    {type: 'item',    label: 'Products',  icon: 'icon-basket',      link: '/content/products'},
    {type: 'title',   label: 'System'},
    {type: 'item',    label: 'Domains',   icon: 'icon-globe',       link: '/domains'},
    {type: 'item',    label: 'Settings',  icon: 'icon-settings',    link: '/settings'},
    {type: 'item',    label: 'Users',     icon: 'icon-user',        link: '/users'},
  ];

  private topNavItems = [
    {label: 'Dashboard',  link: '/dashboard'},
    {label: 'Domains',    link: '/domains'},
    {label: 'Settings',   link: '/settings'},
    {label: 'Users',      link: '/users'},
  ];
}
