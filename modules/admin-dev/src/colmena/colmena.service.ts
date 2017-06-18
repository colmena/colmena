import { Injectable } from '@angular/core'
import { SystemApi } from '@colmena/admin-lb-sdk'

@Injectable()
export class ColmenaService {

  constructor(
    private systemApi: SystemApi,
  ) {
  }

  getModules() {
    return this.systemApi.modules()
  }

}
