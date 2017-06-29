/* tslint:disable */
import { Injectable } from '@angular/core';
import { Email } from '../../models/Email';
import { Core } from '../../models/Core';
import { System } from '../../models/System';
import { ContentEvent } from '../../models/ContentEvent';
import { ContentPage } from '../../models/ContentPage';
import { ContentProduct } from '../../models/ContentProduct';
import { ContentPost } from '../../models/ContentPost';
import { Domain } from '../../models/Domain';
import { StorageFile } from '../../models/StorageFile';
import { SystemDomain } from '../../models/SystemDomain';
import { SystemSetting } from '../../models/SystemSetting';
import { SystemUser } from '../../models/SystemUser';
import { Ping } from '../../models/Ping';
import { Meta } from '../../models/Meta';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Email: Email,
    Core: Core,
    System: System,
    ContentEvent: ContentEvent,
    ContentPage: ContentPage,
    ContentProduct: ContentProduct,
    ContentPost: ContentPost,
    Domain: Domain,
    StorageFile: StorageFile,
    SystemDomain: SystemDomain,
    SystemSetting: SystemSetting,
    SystemUser: SystemUser,
    Ping: Ping,
    Meta: Meta,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
