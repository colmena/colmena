import { Injectable, Inject } from '@angular/core';
import { IO } from './io.service';
import { JSONSearchParams } from './search.params';
import { LoopBackAuth } from './auth.service';
import { AccessToken } from '../../models';
import { FireLoop } from '../../models/FireLoop';

@Injectable()
export class RealTime {

  public IO: IO;
  public FireLoop: FireLoop;

  constructor(
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams
  ) {
    let token: AccessToken = this.auth.getToken();
    this.IO                = new IO(token);
    this.FireLoop          = new FireLoop(token);
  }
}
