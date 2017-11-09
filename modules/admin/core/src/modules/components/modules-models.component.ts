import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-modules-models',
  template: `
    <table class="table table-sm">
      <tr>
        <th>Name</th>
        <th>DS</th>
        <th>Public</th>
      </tr>
      <tr *ngFor="let model of models">
        <td>{{model.name}}</td>
        <td>{{model.dataSource}}</td>
        <td>{{model.public ? 'V': 'X'}}</td>
      </tr>
    </table>
  `,
})
export class ModulesModelsComponent implements OnInit {
  @Input() module = {}
  public models

  ngOnInit() {
    const models = (this.module && this.module['models']) || []
    const modelNames = Object.keys(models)
    this.models = modelNames.map(modelName => {
      return {
        name: modelName,
        public: models[modelName].public,
        dataSource: models[modelName].dataSource,
      }
    })
  }
}
