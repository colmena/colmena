import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UploadComponent } from './components/upload.component'
import { DownloadComponent } from './components/download.component'
import { IndexComponent } from './components/index.component'
import { FilesComponent } from './components/files.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Storage',
    },
    children: [
      {
        path: '',
        component: IndexComponent,
        children: [
          { path: '', redirectTo: 'files', pathMatch: 'full' },
          { path: 'files', component: FilesComponent, data: { title: 'Files' } },
          { path: 'download', component: DownloadComponent, data: { title: 'Download' } },
          { path: 'upload', component: UploadComponent, data: { title: 'Upload' } },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorageRoutingModule {}
