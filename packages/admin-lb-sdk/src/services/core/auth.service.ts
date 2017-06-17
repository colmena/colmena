/* tslint:disable */
declare var Object: any;
import { Injectable, Inject } from '@angular/core';
import { InternalStorage } from '../../storage/storage.swaps';
import { SDKToken } from '../../models/BaseModels';
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
@Injectable()
export class LoopBackAuth {
  /**
   * @type {SDKToken}
   **/
  private token: SDKToken = new SDKToken();
  /**
   * @type {string}
   **/
  protected prefix: string = '$LoopBackSDK$';
  /**
   * @method constructor
   * @param {InternalStorage} storage Internal Storage Driver
   * @description
   * The constructor will initialize the token loading data from storage
   **/
  constructor(@Inject(InternalStorage) protected storage: InternalStorage) {
    this.token.id = this.load('id');
    this.token.user = this.load('user');
    this.token.userId = this.load('userId');
    this.token.created = this.load('created');
    this.token.ttl = this.load('ttl');
    this.token.rememberMe = this.load('rememberMe');
  }
  /**
   * @method setRememberMe
   * @param {boolean} value Flag to remember credentials
   * @return {void}
   * @description
   * This method will set a flag in order to remember the current credentials
   **/
  public setRememberMe(value: boolean): void {
    this.token.rememberMe = value;
  }
  /**
   * @method setUser
   * @param {any} user Any type of user model
   * @return {void}
   * @description
   * This method will update the user information and persist it if the
   * rememberMe flag is set.
   **/
  public setUser(user: any) {
    this.token.user = user;
    this.save();
  }
  /**
   * @method setToken
   * @param {SDKToken} token SDKToken or casted AccessToken instance
   * @return {void}
   * @description
   * This method will set a flag in order to remember the current credentials
   **/
  public setToken(token: SDKToken): void {
    this.token = Object.assign(this.token, token);
    this.save();
  }
  /**
   * @method getToken
   * @return {void}
   * @description
   * This method will set a flag in order to remember the current credentials.
   **/
  public getToken(): SDKToken {
    return <SDKToken>this.token;
  }
  /**
   * @method getAccessTokenId
   * @return {string}
   * @description
   * This method will return the actual token string, not the object instance.
   **/
  public getAccessTokenId(): string {
    return this.token.id;
  }
  /**
   * @method getCurrentUserId
   * @return {any}
   * @description
   * This method will return the current user id, it can be number or string.
   **/
  public getCurrentUserId(): any {
    return this.token.userId;
  }
  /**
   * @method getCurrentUserData
   * @return {any}
   * @description
   * This method will return the current user instance.
   **/
  public getCurrentUserData(): any {
    return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
  }
  /**
   * @method save
   * @return {boolean} Wether or not the information was saved
   * @description
   * This method will save in either local storage or cookies the current credentials.
   * But only if rememberMe is enabled.
   **/
  public save(): boolean {
    if (this.token.rememberMe) {
      this.persist('id', this.token.id);
      this.persist('user', this.token.user);
      this.persist('userId', this.token.userId);
      this.persist('created', this.token.created);
      this.persist('ttl', this.token.ttl);
      this.persist('rememberMe', this.token.rememberMe);
      return true;
    } else {
      return false;
    }
  };
  /**
   * @method load
   * @param {string} prop Property name
   * @return {any} Any information persisted in storage
   * @description
   * This method will load either from local storage or cookies the provided property.
   **/
  protected load(prop: string): any {
    return this.storage.get(`${this.prefix}${prop}`);
  }
  /**
   * @method clear
   * @return {void}
   * @description
   * This method will clear cookies or the local storage.
   **/
  public clear(): void {
    Object.keys(this.token).forEach((prop: string) => this.storage.remove(`${this.prefix}${prop}`));
    this.token = new SDKToken();
  }
  /**
   * @method clear
   * @return {void}
   * @description
   * This method will clear cookies or the local storage.
   **/
  protected persist(prop: string, value: any): void {
    try {
      this.storage.set(
        `${this.prefix}${prop}`,
        (typeof value === 'object') ? JSON.stringify(value) : value
      );
    }
    catch (err) {
      console.error('Cannot access local/session storage:', err);
    }
  }
}
