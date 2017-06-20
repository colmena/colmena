import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { StorageRoutingModule } from './storage-routing.module'
import { StorageService } from './storage.service'

import { DownloadComponent } from './components/download.component'
import { FileComponent } from './components/file.component'
import { FilesComponent } from './components/files.component'
import { IndexComponent } from './components/index.component'
import { UploadComponent } from './components/upload.component'

@NgModule({
  imports: [
    CommonModule,
    ColmenaUiModule,
    StorageRoutingModule,
  ],
  providers: [
    StorageService,
  ],
  declarations: [
    DownloadComponent,
    FileComponent,
    FilesComponent,
    IndexComponent,
    UploadComponent,
  ],
})
export class StorageModule { }
