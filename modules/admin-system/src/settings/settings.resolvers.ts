import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { Setting, SettingsService } from './settings.service'

@Injectable()
export class SystemSettingResolver implements Resolve<Setting> {

  constructor(private service: SettingsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Setting> {
    return this.service.getItem(route.params.id)
  }
}
