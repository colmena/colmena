import { Injectable } from '@angular/core'
import { assign, noop } from 'lodash'

import { NgxAlertsService } from '@ngx-plus/ngx-alerts'

@Injectable()
export class UiService {
  constructor(public alerts: NgxAlertsService) {}
}
