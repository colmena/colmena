import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import { app, AppEffects } from './state'
import { auth, AuthEffects } from '@colmena/admin-auth'
import { layout, LayoutEffects } from '@colmena/admin-layout'

@NgModule({
  imports: [
    StoreModule.provideStore({
      app,
      auth,
      layout,
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AppEffects),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(LayoutEffects),
  ],
})
export class AppStoreModule {}
