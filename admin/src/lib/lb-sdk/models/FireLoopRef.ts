import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { LoopBackFilter, StatFilter } from './index';
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
  /**
  * @method constructor
  * @param model
  * @param socket
  * @param parent
  * @param relationship
  * @description
  * The constructor will receive the required parameters and then will register this reference
  * into the server, needed to allow multiple references for the same model.
  * This ids are referenced into this specific client connection and won't have issues
  * with other client ids.
  **/
  constructor(
    private model: any,
    private socket: any,
    private parent: any = null,
    private relationship: any = null
  ) {
    this.socket.emit(
      `Subscribe.${ !parent ? model.getModelName() : parent.model.getModelName() }`,
      { id : this.id, scope:  model.getModelName(), relationship: relationship }
    );
    return this;
  }
  /**
  * @method upsert
  * @param data
  * @description
  * Operation wrapper for upsert function.
  **/
  public upsert(data: any): Observable<T> {
    return this.operation('upsert', data);
  }
  /**
  * @method upsert
  * @param data
  * @description
  * Operation wrapper for create function.
  **/
  public create(data: any): Observable<T> {
    return this.operation('create', data);
  }
  /**
  * @method upsert
  * @param data
  * @description
  * Operation wrapper for remove function.
  **/
  public remove(data: any): Observable<T> {
    return this.operation('remove', data);
  }
  /**
  * @method on
  * @param event
  * @param filter
  * @description
  * Listener for different type of events. Valid events are:
  *   - change (Triggers on any model change -create, update, remove-)
  *   - value (Triggers on new entries)
  *   - child_added (Triggers when a child is added)
  *   - child_updated (Triggers when a child is updated)
  *   - child_removed (Triggers when a child is removed)
  **/
  public on(event: string, filter: LoopBackFilter = { limit: 100, order: 'id DESC' }): Observable<T | T[]> {
    let request: any;
    if (!this.relationship) {
      event = `${ this.model.getModelName() }.${event}`;
      request = { filter };
    } else {
      event = `${ this.parent.model.getModelName() }.${ this.relationship }.${event}`;
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
  * @param filter
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
  * @param instance
  * @description
  * This method will set a model instance into this current FireLoop Reference.
  * This allows to persiste parentship when creating related instances.
  **/
  public make(instance: any): FireLoopRef<T> {
    let reference: FireLoopRef<T> = new FireLoopRef<T>(this.model, this.socket);
        reference.instance = instance;
    return reference;
  }
  /**
  * @method child
  * @param relationship
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
      throw new Error(`Invalid model relationship ${ this.model.getModelName() } <-> ${ relationship }, verify your model settings.`);
    }
    // Verify if the relationship model is public
    if (settings.model === '') {
      throw new Error(`Relationship model is private, cam't use ${ relationship } unless you set your model as public.`);
    }
    // Lets get a model reference and add a reference for all of the models
    let model: any   = this.model.models.get(settings.model);
        model.models = this.model.models;
    // If everything goes well, we will store a child reference and return it.
    this.childs[relationship] = new FireLoopRef<T>(model, this.socket, this, relationship);
    return this.childs[relationship];
  }
  /**
  * @method pull
  * @param relationship
  * @description
  * This method will pull initial data from server
  **/
  private pull(event: string, request: any): Observable<T> {
    let sbj: Subject<T> = new Subject<T>();
    let that: FireLoopRef<T> = this;
    let nowEvent: any = `${event}.pull.requested.${ this.id }`;
    this.socket.emit(`${event}.pull.request.${ this.id }`, request);
    function pullNow(data: any) {
      if (that.socket.removeListener) {
        that.socket.removeListener(nowEvent, pullNow);
      }
      sbj.next(data);
    };
    this.socket.onZone(nowEvent, pullNow);
    return sbj.asObservable();
  }
  /**
  * @method operation
  * @param relationship
  * @description
  * This internal method will run operations depending on current context 
  **/
  private broadcasts(event: string, request: any): Observable<T> {
    let sbj: Subject<T> = new Subject<T>();
    this.socket.onZone(
      `${event}.broadcast.announce.${ this.id }`,
      (res: T) =>
        this.socket.emit(`${event}.broadcast.request.${ this.id }`, request)
    );
    this.socket.onZone(`${ event }.broadcast.${ this.id }`, (data: any) => sbj.next(data));
    return sbj.asObservable();
  }
  /**
  * @method operation
  * @param event
  * @param data
  * @description
  * This internal method will run operations depending on current context 
  **/
  private operation(event: string, data: any): Observable<T> {
    if (!this.relationship) {
      event = `${ this.model.getModelName() }.${event}.${ this.id }`;
    } else {
      event = `${ this.parent.model.getModelName() }.${ this.relationship }.${ event }.${ this.id }`;
    }
    let subject: Subject<T> = new Subject<T>();
    let config: { data: any, parent: any } = {
      data,
      parent: this.parent && this.parent.instance ? this.parent.instance : null
    };
    this.socket.emit(event, config);
    this.socket.onZone(`${ this.model.getModelName() }.value.result.${ this.id }`, (res: any) =>
      subject.next(res.error ? Observable.throw(res.error) : res)
    );
    return subject.asObservable();
  }
  /**
  * @method buildId
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
