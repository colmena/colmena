import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import { app, AppEffects } from './state'
import { auth, AuthEffects } from '@colmena/colmena-angular-auth'
// import { layout } from '@colmena/colmena-angular-layout'

@NgModule({
  imports: [
    StoreModule.provideStore({
      app,
      auth,
      // layout,
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AppEffects),
    EffectsModule.run(AuthEffects),
  ],
})
export class AppStoreModule {}
