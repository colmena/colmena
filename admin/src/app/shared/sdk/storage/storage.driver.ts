/* tslint:disable */
export class StorageDriver {
  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  static get(key: string): string {
    return localStorage.getItem(key);
  }
  static remove(key: string): any {
    localStorage.removeItem(key);
  }
}
