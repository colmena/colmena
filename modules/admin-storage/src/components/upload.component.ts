import { Component, OnInit } from '@angular/core'
import { StorageService } from '../storage.service'

@Component({
  selector: 'app-storage-upload',
  template: `
    <app-ui-uploader [url]="uploadUrl"></app-ui-uploader>
  `,
})
export class UploadComponent implements OnInit {
  public uploadUrl

  constructor(public service: StorageService) {
  }

  ngOnInit() {
    this.service.domain = { id: 'default' }
    this.uploadUrl = this.service.getUploadUrl()
  }

}
