import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { MetaApi } from '@colmena/admin-lb-sdk'
import 'rxjs/add/operator/map'

@Injectable()
export class DataBrowserApi {
  apiUrl = null
  modelName = null

  apiGET(path) {
    return this.http.get([this.getApiUrl(), ...path].join('/')).map(res => JSON.parse(res['_body']))
  }

  getModels() {
    return this.metaApi.getModels()
  }

  getModelItems(modelName) {
    return this.metaApi.getModelById(modelName)
  }

  public setModelName(modelName) {
    this.modelName = modelName
  }

  public getModelName() {
    return this.modelName
  }

  public setApiUrl(apiUrl) {
    this.apiUrl = apiUrl
  }

  public getApiUrl() {
    return this.apiUrl
  }

  public getItems() {
    return this.modelName
  }

  public find() {
    return this.apiGET([this.modelName])
  }

  public findById(id) {
    return this.apiGET([this.modelName, id])
  }

  public getModelMeta(modelNAme) {
    return this.metaApi.findById(modelNAme)
  }

  constructor(private metaApi: MetaApi, private http: Http) {
    /* tslint disable */
    const apiConfig = JSON.parse(window.localStorage.getItem('apiConfig'))

    this.setApiUrl([apiConfig.baseUrl, apiConfig.version].join('/'))
  }
}
