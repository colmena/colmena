/* tslint:disable */
import { Injectable } from '@angular/core';
import { LoopBackConfig } from '../../lb.config';
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
@Injectable()
export class LoggerService {

  log(...args: any[]) {
    if (LoopBackConfig.debuggable())
    console.log.apply(console, args);
  }

  info(...args: any[]) {
    if (LoopBackConfig.debuggable())
    console.info.apply(console, args);
  }

  error(...args: any[]) {
    if (LoopBackConfig.debuggable())
    console.error.apply(console, args);
  }

  count(arg: string) {
    if (LoopBackConfig.debuggable())
    console.count(arg);
  }

  group(arg: string) {
    if (LoopBackConfig.debuggable())
    console.count(arg);
  }

  groupEnd() {
    if (LoopBackConfig.debuggable())
    console.groupEnd();
  }

  profile(arg: string) {
    if (LoopBackConfig.debuggable())
    console.count(arg);
  }

  profileEnd() {
    if (LoopBackConfig.debuggable())
    console.profileEnd();
  }

  time(arg: string) {
    if (LoopBackConfig.debuggable())
    console.time(arg);
  }

  timeEnd(arg: string) {
    if (LoopBackConfig.debuggable())
    console.timeEnd(arg);
  }
}
