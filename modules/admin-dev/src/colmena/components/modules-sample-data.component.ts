import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-modules-sample-data',
  template: `
    <h5>Sample Data</h5>
    <ul>
      <li *ngFor="let item of module.sampleData">
        <a href="">{{item}}</a>
      </li>
    </ul>

    <h5>Sample Files</h5>
    <ul>
      <li *ngFor="let item of module.sampleFiles  ">
        <a href="">{{item}}</a>
      </li>
    </ul>

  `
})
export class ModulesSampleDataComponent implements OnInit {

  @Input() module

  constructor(
  ) {
  }

  ngOnInit() {
  }
}
