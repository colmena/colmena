import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { StorageRoutingModule } from './storage-routing.module'

import { StorageService } from './storage.service'

import { DownloadComponent } from './components/download.component'
import { FileComponent } from './components/file.component'
import { FilesComponent } from './components/files.component'
import { IndexComponent } from './components/index.component'
import { UploadComponent } from './components/upload.component'

@NgModule({
  imports: [FormsModule, ColmenaUiModule, StorageRoutingModule],
  providers: [StorageService],
  declarations: [DownloadComponent, FileComponent, FilesComponent, IndexComponent, UploadComponent],
})
export class StorageModule {}
