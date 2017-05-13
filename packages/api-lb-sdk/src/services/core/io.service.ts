import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class IO {

  private socket: any;
  private observables: any = {};

  constructor(socket: any) { this.socket = socket; }

  emit(event: string, data: any): void {
    this.socket.emit('ME:RT:1://event', {
        event : event,
        data  : data
    });
  }

  on(event: string): Observable<any> {
    if (this.observables[event]) { return this.observables[event]; }
    let subject: Subject<any> = new Subject<any>();
    this.socket.on(event, (res: any) => subject.next(res));
    this.observables[event] = subject.asObservable();
    return this.observables[event];
  }
}
