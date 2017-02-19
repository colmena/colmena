/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { JSONSearchParams } from '../core/search.params';
import { ErrorHandler } from '../core/error.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { Event } from '../../models/Event';
import { SocketConnection } from '../../sockets/socket.connections';
import { Domain } from '../../models/Domain';
import { File } from '../../models/File';


/**
 * Api services for the `Event` model.
 *
 * **Details**
 *
 * Content model for managing Events in a Domain
 */
@Injectable()
export class EventApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) protected http: Http,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, searchParams, errorHandler);
  }

  /**
   * Fetches belongsTo relation domain.
   *
   * @param {any} id Event id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Event` object.)
   * </em>
   */
  public getDomain(id: any, refresh: any = {}): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Events/:id/domain";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (refresh) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
    return result;
  }

  /**
   * Fetches belongsTo relation file.
   *
   * @param {any} id Event id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Event` object.)
   * </em>
   */
  public getFile(id: any, refresh: any = {}): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Events/:id/file";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (refresh) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
    return result;
  }

  /**
   * Generate template basic
   *
   * @param {Object} options Overwrite values of template
   *
   * @param {Object} params Pass parameters into the template method
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Event` object.)
   * </em>
   */
  public _template_basic_remote(options: any = {}, params: any = {}): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Events/_template_basic";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (options) _urlParams.options = options;
    if (params) _urlParams.params = params;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `Event`.
   */
  public getModelName() {
    return "Event";
  }
}
