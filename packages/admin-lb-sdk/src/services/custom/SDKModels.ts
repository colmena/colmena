/* tslint:disable */
import { Injectable } from '@angular/core';
import { Email } from '../../models/Email';
import { AuthCredential } from '../../models/AuthCredential';
import { AuthIdentity } from '../../models/AuthIdentity';
import { AuthProvider } from '../../models/AuthProvider';
import { ContentEvent } from '../../models/ContentEvent';
import { ContentPage } from '../../models/ContentPage';
import { ContentProduct } from '../../models/ContentProduct';
import { ContentPost } from '../../models/ContentPost';
import { Core } from '../../models/Core';
import { Dev } from '../../models/Dev';
import { StorageContainer } from '../../models/StorageContainer';
import { StorageFile } from '../../models/StorageFile';
import { System } from '../../models/System';
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
    AuthCredential: AuthCredential,
    AuthIdentity: AuthIdentity,
    AuthProvider: AuthProvider,
    ContentEvent: ContentEvent,
    ContentPage: ContentPage,
    ContentProduct: ContentProduct,
    ContentPost: ContentPost,
    Core: Core,
    Dev: Dev,
    StorageContainer: StorageContainer,
    StorageFile: StorageFile,
    System: System,
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
