/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
export class Storage {
  /**
   * @method get
   * @param {string} key Storage key name
   * @return {any}
   * @description
   * The getter will return any type of data persisted in storage.
   **/
  get(key: string): any {}
  /**
   * @method set
   * @param {string} key Storage key name
   * @param {any} value Any value
   * @return {void}
   * @description
   * The setter will return any type of data persisted in localStorage.
   **/
  set(key: string, value: any): void {}
  /**
   * @method remove
   * @param {string} key Storage key name
   * @return {void}
   * @description
   * This method will remove a localStorage item from the client.
   **/
  remove(key: string): void {}
}
/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
export class InternalStorage extends Storage {}
/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
export class SDKStorage extends Storage {}
