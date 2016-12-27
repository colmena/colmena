/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Headers, Request } from '@angular/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { JSONSearchParams } from './search.params';
import { ErrorHandler } from './error.service';
import { LoopBackAuth } from './auth.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackFilter, AccessToken } from '../../models/BaseModels';
import { SDKModels } from '../custom/SDKModels';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SocketConnections } from '../../sockets/socket.connections';
// Making Sure EventSource Type is available to avoid compilation issues.
declare var EventSource: any;
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
@Injectable()
export abstract class BaseLoopBackApi {

  protected path: string;
  protected model: any;

  constructor(
    @Inject(Http) protected http: Http,
    @Inject(SocketConnections) protected connections: SocketConnections,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    this.model = this.models.get(this.getModelName());
  }

  /**
   * Process request
   * @param string  method      Request method (GET, POST, PUT)
   * @param string  url         Request url (my-host/my-url/:id)
   * @param any     routeParams Values of url parameters
   * @param any     urlParams   Parameters for building url (filter and other)
   * @param any     postBody    Request postBody
   * @param boolean isio        Request socket connection (When IO is enabled)
   */
  public request(
    method      : string,
    url         : string,
    routeParams : any = {},
    urlParams   : any = {},
    postBody    : any = {},
    isio        : boolean = false
  ): Observable<any> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (this.auth.getAccessTokenId()) {
      headers.append(
        'Authorization',
        LoopBackConfig.getAuthPrefix() + this.auth.getAccessTokenId()
      );
    }

    let requestUrl = url;
    let key: string;
    for (key in routeParams) {
      requestUrl = requestUrl.replace(
        new RegExp(":" + key + "(\/|$)", "g"),
        routeParams[key] + "$1"
      );
    }

    if (isio) {
      if (requestUrl.match(/fk/)) {
        let arr = requestUrl.split('/'); arr.pop();
        requestUrl = arr.join('/');
      }
      let event: string = (`[${method}]${requestUrl}`).replace(/\?/, '');
      let subject: Subject<any> = new Subject<any>();
      let token: AccessToken = new AccessToken();
          token.id = this.auth.getAccessTokenId();
          token.userId = this.auth.getCurrentUserId();
      let socket: any = this.connections.getHandler(LoopBackConfig.getPath(), token);
          socket.on(event, (res: any) => subject.next(res));
      return subject.asObservable();
    }
    
    // Body fix for built in remote methods using "data", "options" or "credentials
    // that are the actual body, Custom remote method properties are different and need
    // to be wrapped into a body object
    let body: any;
    let postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : []
    if (postBodyKeys.length === 1) {
      body = postBody[postBodyKeys[0]]
    } else {
      body = postBody;
    }
    // Separate filter object from url params
    if (urlParams.filter) {
      headers.append('filter', JSON.stringify(urlParams.filter));
      delete urlParams.filter;
    }

    this.searchParams.setJSON(urlParams);
    let request: Request = new Request({
      headers : headers,
      method  : method,
      url     : requestUrl,
      search  : Object.keys(urlParams).length > 0
              ? this.searchParams.getURLSearchParams() : null,
      body    : body ? JSON.stringify(body) : undefined
    });
    return this.http.request(request)
      .map((res: any) => (res.text() != "" ? res.json() : {}))
      .catch((e) => this.errorHandler.handleError(e));
  }
  /**
   * @method create
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic create method
   */
  public create<T>(data: any = {}): Observable<T> {
    return this.request('POST', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural
    ].join('/'), undefined, undefined, { data }).map((data: T) => this.model.factory(data));
  }
  /**
   * @method create
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic create method
   */
  public createMany<T>(data: any = {}): Observable<T[]> {
    return this.request('POST', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural
    ].join('/'), undefined, undefined, { data })
    .map((datum: T[]) => datum.map((data: T) => this.model.factory(data)));
  }
  /**
   * @method findById
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic findById method
   */
  public findById<T>(id: any, filter: LoopBackFilter = {}): Observable<T> {
    let _urlParams: any = {};
    if (filter) _urlParams.filter = filter;
    return this.request('GET', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      ':id'
    ].join('/'), { id }, _urlParams, undefined).map((data: T) => this.model.factory(data));
  }
  /**
   * @method find
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic find method
   */
  public find<T>(filter: LoopBackFilter = {}): Observable<T[]> {
    return this.request('GET', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural
    ].join('/'), undefined, { filter }, undefined)
    .map((datum: T[]) => datum.map((data: T) => this.model.factory(data)));
  }
  /**
   * @method exists
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic exists method
   */
  public exists<T>(id: any): Observable<T[]> {
    return this.request('GET', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      ':id/exists'
    ].join('/'), { id }, undefined, undefined);
  }
  /**
   * @method findOne
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic findOne method
   */
  public findOne<T>(filter: LoopBackFilter = {}): Observable<T> {
    return this.request('GET', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      'findOne'
    ].join('/'), undefined, { filter }, undefined).map((data: T) => this.model.factory(data));
  }
  /**
   * @method updateAll
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic updateAll method
   */
  public updateAll<T>(where: any = {}, data: T): Observable<T[]> {
    let _urlParams: any = {};
    if (where) _urlParams.where = where;
    return this.request('POST', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      'update'
    ].join('/'), undefined, _urlParams, { data })
    .map((datum: T[]) => datum.map((data: T) => this.model.factory(data)));
  }
  /**
   * @method deleteById
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic deleteById method
   */
  public deleteById<T>(id: any): Observable<T> {
    return this.request('DELETE', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      ':id'
    ].join('/'), { id }, undefined, undefined).map((data: T) => this.model.factory(data));
  }
  /**
   * @method count
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic count method
   */
  public count(where: any = {}): Observable<{ count: number }> {
    let _urlParams: any = {};
    if (where) _urlParams.where = where;
    return this.request('GET', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      'count'
    ].join('/'), undefined, _urlParams, undefined);
  }
  /**
   * @method updateAttributes
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic updateAttributes method
   */
  public updateAttributes<T>(id: any, data: T): Observable<T> {
    return this.request('PUT', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      ':id'
    ].join('/'), { id }, undefined, { data }).map((data: T) => this.model.factory(data));
  }
  /**
   * @method upsert
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic upsert method
   */
  public upsert<T>(data: any = {}): Observable<T> {
    return this.request('PUT', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
    ].join('/'), undefined, undefined, { data }).map((data: T) => this.model.factory(data));
  }
  /**
   * @method upsertWithWhere
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic upsertWithWhere method
   */
  public upsertWithWhere<T>(where: any = {}, data: any = {}): Observable<T> {
    let _urlParams: any = {};
    if (where) _urlParams.where = where;
    return this.request('PUT', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      'upsertWithWhere'
    ].join('/'), undefined, _urlParams, { data }).map((data: T) => this.model.factory(data));
  }
  /**
   * @method replaceOrCreate
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic replaceOrCreate method
   */
  public replaceOrCreate<T>(data: any = {}): Observable<T> {
    return this.request('PUT', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      'replaceOrCreate'
    ].join('/'), undefined, undefined, { data }).map((data: T) => this.model.factory(data));
  }
  /**
   * @method replaceById
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic replaceById method
   */
  public replaceById<T>(id: any, data: any = {}): Observable<T> {
    return this.request('POST', [
      LoopBackConfig.getPath(),
      LoopBackConfig.getApiVersion(),
      this.model.getModelDefinition().plural,
      ':id', 'replace'
    ].join('/'), { id }, undefined, { data }).map((data: T) => this.model.factory(data));
  }
  /**
   * @method createChangeStream
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Generic createChangeStream method
   */
  public createChangeStream(): Observable<any> {
    let subject = new Subject();
    if (typeof EventSource !== 'undefined') {
      let emit   = (msg: any) => subject.next(JSON.parse(msg.data));
      var source = new EventSource([
        LoopBackConfig.getPath(),
        LoopBackConfig.getApiVersion(),
        this.model.getModelDefinition().plural,
        'change-stream'
      ].join('/'));
      source.addEventListener('data', emit);
      source.onerror = emit;
    } else {
      console.warn('SDK Builder: EventSource is not supported'); 
    }
    return subject.asObservable();
  }
  /**
   * @method getModelName
   * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
   * @license MIT
   * @description
   * Abstract getModelName method
   */
  abstract getModelName(): string;
}
