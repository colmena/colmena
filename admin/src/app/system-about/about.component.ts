import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  private projects = [{
    name: 'Loopback',
    url: 'https://loopback.io/',
    description: 'The Node.js API Framework. Built by StrongLoop, an IBM company',
    class: 'card-accent-success'
  }, {
    name: 'Angular',
    url: 'https://angular.io/',
    description: 'AngularJS is a structural framework for dynamic web apps.',
    class: 'card-accent-danger'
  }, {
    name: 'Fireloop',
    url: 'http://fireloop.io/',
    description: 'NodeJS Real-Time Platform by MEAN Expert.',
    class: 'card-accent-warning'
  }, {
    name: 'CoreUI',
    url: 'http://coreui.io/',
    description: 'CoreUI is an open source bootstrap 4 based admin template.',
    class: 'card-accent-primary'
  }];

  constructor() {
  }

}
