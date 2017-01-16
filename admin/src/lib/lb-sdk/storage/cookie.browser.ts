import { Injectable } from '@angular/core';
/**
* @module CookieBrowser
* @author Jonathan Casarrubias
* @license MIT
* @description
* Stand-alone cookie service for browsers
**/
@Injectable()
export class CookieBrowser {
  private cookies: { [key: string]: any } = {};
  get(key: string): any {
    if (!this.cookies[key]) {
      let cookie = window.document
                         .cookie.split('; ')
                         .filter((item: any) => item.split('=')[0] === key).pop();
      if (!cookie) {
        return null;
      }

      this.cookies[key] = this.parse(cookie.split('=').pop());
    }

    return this.cookies[key];
  }

  set(key: string, value: any, expires?: Date) {
    this.cookies[key] = value;
    let cookie = `${key}=${value}; path=/${expires ? `; expires=${ expires.toUTCString() }` : ''}`;
    window.document.cookie = cookie;
  }

  remove(key: string) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  private parse(value: any) {
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
  }
}
