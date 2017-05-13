/**
 * Credits and thanks to Ben Nadel (https://twitter.com/BenNadel)
 * Source: https://www.bennadel.com/blog/3129-implementing-a-log-inspired-logging-service-in-angular-2-rc-4.htm
 * Source: https://github.com/bennadel/JavaScript-Demos/tree/master/demos/log-service-angular2
 */
import { Injectable } from '@angular/core'

// Define the interface that all loggers must implement.
export interface ILogger {
  assert(...args: any[]): void
  error(...args: any[]): void
  group(...args: any[]): void
  groupEnd(...args: any[]): void
  info(...args: any[]): void
  log(...args: any[]): void
  warn(...args: any[]): void
}

// Declare the console as an ambient value so that TypeScript doesn't complain.
declare var console: any

@Injectable()
export class LogService implements ILogger {

  public assert(...args: any[]): void {
    ( console && console.assert ) && console.assert(...args)
  }


  public error(...args: any[]): void {
    ( console && console.error ) && console.error(...args)
  }


  public group(...args: any[]): void {
    ( console && console.group ) && console.group(...args)
  }


  public groupEnd(...args: any[]): void {
    ( console && console.groupEnd ) && console.groupEnd(...args)
  }


  public info(...args: any[]): void {
    ( console && console.info ) && console.info(...args)
  }


  public log(...args: any[]): void {
    ( console && console.log ) && console.log(...args)
  }


  public warn(...args: any[]): void {
    ( console && console.warn ) && console.warn(...args)
  }

}
