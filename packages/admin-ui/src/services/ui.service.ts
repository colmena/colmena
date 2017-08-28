import { Injectable } from '@angular/core'
import { NgxAlertsService } from '@ngx-plus/ngx-alerts'

@Injectable()
export class UiService {

  constructor(public alerts: NgxAlertsService) {}

}
