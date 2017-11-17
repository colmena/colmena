import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { LoopBackFilter, StatFilter } from './index';
import { SocketConnection } from '../sockets/socket.connections';
/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
export class FireLoopRef<T> {
  // Reference ID
  private id: number = this.buildId();
  // Model Instance (For child references, empty on root references)
  private instance: any;
  // Model Childs
  private childs: any = {};
  // Disposable Events
  private disposable: { [key: string]: any } = {};
  /**
  * @method constructor
  * @param {any} model The model we want to create a reference
  * @param {SocketConnection} socket Socket connection to handle events
  * @param {FireLoopRef<any>} parent Parent FireLoop model reference
  * @param {string} relationship The defined model relationship
  * @description
  * The constructor will receive the required parameters and then will register this reference
  * into the server, needed to allow multiple references for the same model.
  * This ids are referenced into this specific client connection and won't have issues
  * with other client ids.
  **/
  constructor(
    private model: any,
    private socket: SocketConnection,
    private parent: FireLoopRef<any> = null,
    private relationship: string = null
  ) {
    this.socket.emit(
      `Subscribe.${!parent ? model.getModelName() : parent.model.getModelName()}`,
      { id: this.id, scope: model.getModelName(), relationship: relationship }
    );
    return this;
  }
  /**
  * @method dispose
  * @return {void}
  * @description
  * This method is super important to avoid memory leaks in the server.
  * This method requires to be called on components destroy
  *
  * ngOnDestroy() {
  *  this.someRef.dispose() 
  * }
  **/
  public dispose(): void {
    const subscription = this.operation('dispose', {}).subscribe(() => {
      Object.keys(this.disposable).forEach((channel: string) => {
        this.socket.removeListener(channel, this.disposable[channel]);
        this.socket.removeAllListeners(channel);
      });
      subscription.unsubscribe();
    });
  }
  /**
  * @method upsert
  * @param {T} data Persisted model instance
  * @return {Observable<T>}
  * @description
  * Operation wrapper for upsert function.
  **/
  public upsert(data: T): Observable<T> {
    return this.operation('upsert', data);
  }
  /**
  * @method create
  * @param {T} data Persisted model instance
  * @return {Observable<T>}
  * @description
  * Operation wrapper for create function.
  **/
  public create(data: T): Observable<T> {
    return this.operation('create', data);
  }
  /**
  * @method remove
  * @param {T} data Persisted model instance
  * @return {Observable<T>}
  * @description
  * Operation wrapper for remove function.
  **/
  public remove(data: T): Observable<T> {
    return this.operation('remove', data);
  }
  /**
  * @method remote
  * @param {string} method Remote method name
  * @param {any[]=} params Parameters to be applied into the remote method
  * @param {boolean} broadcast Flag to define if the method results should be broadcasted
  * @return {Observable<any>}
  * @description
  * This method calls for any remote method. It is flexible enough to
  * allow you call either built-in or custom remote methods.
  *
  * FireLoop provides this interface to enable calling remote methods
  * but also to optionally send any defined accept params that will be
  * applied within the server.
  **/
  public remote(method: string, params?: any[], broadcast: boolean = false): Observable<any> {
    return this.operation('remote', { method, params, broadcast });
  }
  /**
  * @method onRemote
  * @param {string} method Remote method name
  * @return {Observable<any>}
  * @description
  * This method listen for public broadcasted remote method results. If the remote method
  * execution is not public only the owner will receive the result data.
  **/
  public onRemote(method: string): Observable<any> {
    let event: string = 'remote';
    if (!this.relationship) {
      event = `${this.model.getModelName()}.${event}`;
    } else {
      event = `${this.parent.model.getModelName()}.${this.relationship}.${event}`;
    }
    return this.broadcasts(event, {});
  }
  /**
  * @method on
  * @param {string} event Event name
  * @param {LoopBackFilter} filter LoopBack query filter
  * @return {Observable<T>}
  * @description
  * Listener for different type of events. Valid events are:
  *   - change (Triggers on any model change -create, update, remove-)
  *   - value (Triggers on new entries)
  *   - child_added (Triggers when a child is added)
  *   - child_updated (Triggers when a child is updated)
  *   - child_removed (Triggers when a child is removed)
  **/
  public on(event: string, filter: LoopBackFilter = { limit: 100, order: 'id DESC' }): Observable<T | T[]> {
    if (event === 'remote') {
      throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
    }
    let request: any;
    if (!this.relationship) {
      event = `${this.model.getModelName()}.${event}`;
      request = { filter };
    } else {
      event = `${this.parent.model.getModelName()}.${this.relationship}.${event}`;
      request = { filter, parent: this.parent.instance };
    }
    if (event.match(/(value|change|stats)/)) {
      return Observable.merge(
        this.pull(event, request),
        this.broadcasts(event, request)
      );
    } else {
      return this.broadcasts(event, request);
    }
  }
  /**
  * @method stats
  * @param {LoopBackFilter=} filter LoopBack query filter
  * @return {Observable<T>}
  * @description
  * Listener for real-time statistics, will trigger on every
  * statistic modification.
  * TIP: You can improve performance by adding memcached to LoopBack models.
  **/
  public stats(filter?: StatFilter): Observable<T | T[]> {
    return this.on('stats', filter);
  }
  /**
  * @method make
  * @param {any} instance Persisted model instance reference
  * @return {Observable<T>}
  * @description
  * This method will set a model instance into this a new FireLoop Reference.
  * This allows to persiste parentship when creating related instances.
  *
  * It also allows to have multiple different persisted instance references to same model.
  * otherwise if using singleton will replace a previous instance for a new instance, when
  * we actually want to have more than 1 instance of same model.
  **/
  public make(instance: any): FireLoopRef<T> {
    let reference: FireLoopRef<T> = new FireLoopRef<T>(this.model, this.socket);
    reference.instance = instance;
    return reference;
  }
  /**
  * @method child
  * @param {string} relationship A defined model relationship
  * @return {FireLoopRef<T>}
  * @description
  * This method creates child references, which will persist related model
  * instances. e.g. Room.messages, where messages belongs to a specific Room.
  **/
  public child<T>(relationship: string): FireLoopRef<T> {
    // Return singleton instance
    if (this.childs[relationship]) { return this.childs[relationship]; }
    // Try to get relation settings from current model
    let settings: any = this.model.getModelDefinition().relations[relationship];
    // Verify the relationship actually exists
    if (!settings) {
      throw new Error(`Invalid model relationship ${this.model.getModelName()} <-> ${relationship}, verify your model settings.`);
    }
    // Verify if the relationship model is public
    if (settings.model === '') {
      throw new Error(`Relationship model is private, cam't use ${relationship} unless you set your model as public.`);
    }
    // Lets get a model reference and add a reference for all of the models
    let model: any = this.model.models.get(settings.model);
    model.models = this.model.models;
    // If everything goes well, we will store a child reference and return it.
    this.childs[relationship] = new FireLoopRef<T>(model, this.socket, this, relationship);
    return this.childs[relationship];
  }
  /**
  * @method pull
  * @param {string} event Event name
  * @param {any} request Type of request, can be LB-only filter or FL+LB filter
  * @return {Observable<T>}
  * @description
  * This method will pull initial data from server
  **/
  private pull(event: string, request: any): Observable<T> {
    let sbj: Subject<T> = new Subject<T>();
    let that: FireLoopRef<T> = this;
    let nowEvent: any = `${event}.pull.requested.${this.id}`;
    this.socket.emit(`${event}.pull.request.${this.id}`, request);
    function pullNow(data: any) {
      if (that.socket.removeListener) {
        that.socket.removeListener(nowEvent, pullNow);
      }
      sbj.next(data);
    };
    this.socket.on(nowEvent, pullNow);
    return sbj.asObservable();
  }
  /**
  * @method broadcasts
  * @param {string} event Event name
  * @param {any} request Type of request, can be LB-only filter or FL+LB filter
  * @return {Observable<T>}
  * @description
  * This will listen for public broadcasts announces and then request
  * for data according a specific client request, not shared with other clients.
  **/
  private broadcasts(event: string, request: any): Observable<T> {
    let sbj: Subject<T> = new Subject<T>();
    let channels: { announce: string, broadcast: string } = {
      announce: `${event}.broadcast.announce.${this.id}`,
      broadcast: `${event}.broadcast.${this.id}`
    };
    let that = this;
    // Announces Handler
    this.disposable[channels.announce] = function (res: T) {
      that.socket.emit(`${event}.broadcast.request.${that.id}`, request)
    };
    // Broadcasts Handler
    this.disposable[channels.broadcast] = function (data: any) {
      sbj.next(data);
    };
    this.socket.on(channels.announce, this.disposable[channels.announce]);
    this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
    return sbj.asObservable();
  }
  /**
  * @method operation
  * @param {string} event Event name
  * @param {any} data Any type of data sent to the server
  * @return {Observable<T>}
  * @description
  * This internal method will run operations depending on current context 
  **/
  private operation(event: string, data: any): Observable<T> {
    if (!this.relationship) {
      event = `${this.model.getModelName()}.${event}.${this.id}`;
    } else {
      event = `${this.parent.model.getModelName()}.${this.relationship}.${event}.${this.id}`;
    }
    let subject: Subject<T> = new Subject<T>();
    let config: { data: any, parent: any } = {
      data,
      parent: this.parent && this.parent.instance ? this.parent.instance : null
    };
    this.socket.emit(event, config);
    let resultEvent: string = '';
    if (!this.relationship) {
      resultEvent = `${this.model.getModelName()}.value.result.${this.id}`;
    } else {
      resultEvent = `${this.parent.model.getModelName()}.${this.relationship}.value.result.${this.id}`;
    }
    this.socket.on(resultEvent, (res: any) => {
      if (res.error) {
        subject.error(res);
      } else {
        subject.next(res);
      }
    });
    if (event.match('dispose')) {
      setTimeout(() => subject.next());
    }
    // This event listener will be wiped within socket.connections
    this.socket.sharedObservables.sharedOnDisconnect.subscribe(() => subject.complete());
    return subject.asObservable().catch((error: any) => Observable.throw(error));
  }
  /**
  * @method buildId
  * @return {number}
  * @description
  * This internal method build an ID for this reference, this allows to have
  * multiple references for the same model or relationships.
  **/
  private buildId(): number {
    return Date.now() + Math.floor(Math.random() * 100800) *
      Math.floor(Math.random() * 100700) *
      Math.floor(Math.random() * 198500);
  }
}
