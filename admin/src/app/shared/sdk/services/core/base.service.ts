/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Headers, Request } from '@angular/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { JSONSearchParams } from './search.params';
import { ErrorHandler } from './error.service';
import { LoopBackAuth } from './auth.service';
import { LoopBackConfig } from '../../lb.config';
import { AccessToken } from '../../models/index';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { SocketConnections } from '../../sockets/socket.connections';
/**
* @module BaseLoopBackApi
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @contributor Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @license MTI
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
@Injectable()
export abstract class BaseLoopBackApi {

  protected path: string;

  constructor(
    @Inject(Http) protected http: Http,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {}

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
    postBody    : any = null,
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
      let socket: any = SocketConnections.getHandler(LoopBackConfig.getPath(), token);
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
    this.searchParams.setJSON(urlParams);
    let request: Request = new Request({
      headers : headers,
      method  : method,
      url     : urlParams.filter ? `${requestUrl}?filter=${ encodeURI(JSON.stringify(urlParams.filter))}`
              : requestUrl,
      search  : !urlParams.filter && Object.keys(urlParams).length > 0
              ? this.searchParams.getURLSearchParams() : null,
      body    : body ? JSON.stringify(body) : undefined
    });
    return this.http.request(request)
      .map((res: any) => (res.text() != "" ? res.json() : {}))
      .catch(this.errorHandler.handleError);
  }
}
