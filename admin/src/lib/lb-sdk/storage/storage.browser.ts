/* tslint:disable */
import { Injectable } from '@angular/core';
/**
* @module StorageBrowser
* @author Jonathan Casarrubias
* @license MIT
* @description
* Stand-alone cookie service for browsers
**/
@Injectable()
export class StorageBrowser {
  set(key: string, value: any) {
    localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value
    );
  }
  get(key: string): any {
    let data: string = localStorage.getItem(key);
    return this.isJSON(data) ? JSON.parse(data) : data;
  }
  remove(key: string): any {
    if (localStorage[key]) {
      localStorage.removeItem(key);
    } else {
      console.log('Trying to remove unexisting key: ', key);
    }
  }
  private isJSON(data: string) {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  }
}
