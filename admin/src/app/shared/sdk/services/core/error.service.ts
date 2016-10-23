/* tslint:disable */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/observable/throw';
/**
 * Default error handler
 */
@Injectable()
export class ErrorHandler {
  public handleError(error: Response): ErrorObservable {
    return Observable.throw(error.json().error || 'Server error');
  }
}
