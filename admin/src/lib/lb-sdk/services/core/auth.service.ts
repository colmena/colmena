/* tslint:disable */
declare var Object: any;
import { Injectable, Inject } from '@angular/core';
import { InternalStorage } from '../../storage/storage.swaps';
import { SDKToken, AccessToken } from '../../models/BaseModels';

/**
 * @module LoopBackAuth
 * @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible authentication mechanism.
 */
@Injectable()
export class LoopBackAuth {

  private token: SDKToken = new SDKToken();
  protected prefix: string = '$LoopBackSDK$';

  constructor(@Inject(InternalStorage) protected storage: InternalStorage) {
    this.token.id         = this.load('id');
    this.token.user       = this.load('user');
    this.token.userId     = this.load('userId');
    this.token.issuedAt   = this.load('issuedAt');
    this.token.created    = this.load('created');
    this.token.ttl        = this.load('ttl');
    this.token.rememberMe = this.load('rememberMe');
  }

  public setRememberMe(value: boolean): void {
    this.token.rememberMe = value;
  }

  public getToken(): AccessToken {
    return <AccessToken> this.token;
  }

  public getAccessTokenId(): any {
    return this.token.id;
  }

  public getCurrentUserId(): any {
    return this.token.userId;
  }

  public getCurrentUserData(): any {
    return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
  }

  public save(): void {
    if (this.token.rememberMe) {
      this.persist('id', this.token.id);
      this.persist('user', this.token.user);
      this.persist('userId', this.token.userId);
      this.persist('issuedAt', this.token.issuedAt);
      this.persist('created', this.token.created);
      this.persist('ttl', this.token.ttl);
      this.persist('rememberMe', this.token.rememberMe);
    }
  };

  public setUser(token: SDKToken) {
    this.token = Object.assign(this.token, token);
  }

  protected load(prop: string): any {
    return this.storage.get(`${this.prefix}${prop}`);
  }
  
  public clear(): void {
    Object.keys(this.token).forEach((prop: string) => this.storage.remove(`${this.prefix}${prop}`));
    this.token = new SDKToken();
  }
  // I do not persist everything in 1 value because I want
  // to decouple user from token data. User can be larger than
  // expected and will be easier to handle as will perform better.
  protected persist(prop: string, value: any): void {
    try {
      this.storage.set(
        `${this.prefix}${prop}`,
        (typeof value === 'object') ? JSON.stringify(value) : value
      );
    }
    catch(err) {
      console.error('Cannot access local/session storage:', err);
    }
  }
}
