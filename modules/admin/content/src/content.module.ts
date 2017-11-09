import { NgModule } from '@angular/core'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { ContentDashboardComponent } from './content.component'
import { HasContentAccess } from './content.guards'
import { DomainResolver } from './content.resolvers'
import { ContentRoutingModule } from './content-routing.module'

@NgModule({
  imports: [ColmenaUiModule, ContentRoutingModule],
  declarations: [ContentDashboardComponent],
  exports: [ContentDashboardComponent],
  providers: [HasContentAccess, DomainResolver],
})
export class ContentModule {}
