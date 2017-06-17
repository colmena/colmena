import { Injectable } from '@angular/core';
export interface CookieInterface { [key: string]: any }
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
@Injectable()
export class CookieBrowser {
  /**
   * @type {CookieInterface}
   **/
  private cookies: CookieInterface = {};
  /**
   * @method get
   * @param {string} key Cookie key name
   * @return {any}
   * @description
   * The getter will return any type of data persisted in cookies.
   **/
  get(key: string): any {
    if (!this.cookies[key]) {
      let cookie = window.document
                         .cookie.split('; ')
                         .filter((item: any) => item.split('=')[0] === key).pop();
      if (!cookie) {
        return null;
      }

      this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
    }

    return this.cookies[key];
  }
  /**
   * @method set
   * @param {string} key Cookie key name
   * @param {any} value Any value
   * @param {Date=} expires The date of expiration (Optional)
   * @return {void}
   * @description
   * The setter will return any type of data persisted in cookies.
   **/
  set(key: string, value: any, expires?: Date): void {
    this.cookies[key] = value;
    let cookie = `${key}=${value}; path=/${expires ? `; expires=${ expires.toUTCString() }` : ''}`;
    window.document.cookie = cookie;
  }
  /**
   * @method remove
   * @param {string} key Cookie key name
   * @return {void}
   * @description
   * This method will remove a cookie from the client.
   **/
  remove(key: string) {
    document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    delete this.cookies[key];
  }
  /**
   * @method parse
   * @param {any} value Input data expected to be JSON
   * @return {void}
   * @description
   * This method will parse the string as JSON if possible, otherwise will
   * return the value itself.
   **/
  private parse(value: any) {
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
  }
}
