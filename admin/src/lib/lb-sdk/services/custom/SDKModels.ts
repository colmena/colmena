/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Domain } from '../../models/Domain';
import { Event } from '../../models/Event';
import { Post } from '../../models/Post';
import { Product } from '../../models/Product';
import { Setting } from '../../models/Setting';
import { Ping } from '../../models/Ping';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    Domain: Domain,
    Event: Event,
    Post: Post,
    Product: Product,
    Setting: Setting,
    Ping: Ping,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
