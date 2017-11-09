import { Component, Input, OnInit } from '@angular/core'
import { FileUploader } from 'ng2-file-upload'

@Component({
  selector: 'app-ui-uploader',
  template: `
    <div ng2FileDrop [ngClass]="{'nv-file-over': fileOver}" (fileOver)="fileOverTrigger($event)" [uploader]="uploader">
      <div class="text-center">
        <label class="btn-bs-file btn btn-block btn-lg btn-primary">
          Browse files...
          <input type="file" ng2FileSelect [uploader]="uploader" multiple />
        </label>
      </div>
      <div>
        <div class="p-1">
          <h3>Upload queue <small>{{ uploader?.queue?.length }} items</small></h3>
          <table class="table">
            <thead>
              <tr>
                <th width="50%">Name</th>
                <th>Status</th>
                <th class="text-xs-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of uploader.queue">
                <td>
                  <strong>{{ item?.file?.name }}</strong>
                </td>
                <td class="text-center">
                  <span *ngIf="item.isSuccess"><i class="glyphicon glyphicon-ok"></i> ok </span>
                  <span *ngIf="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i> cancel </span>
                  <span *ngIf="item.isError"><i class="glyphicon glyphicon-remove"></i>error </span>
              </td>
                <td nowrap class="text-xs-right">
                  <button type="button" class="btn btn-success btn-sm" (click)="item.upload()"
                    [disabled]="item.isReady || item.isUploading || item.isSuccess">
                    <span class="glyphicon glyphicon-upload"></span> Upload
                  </button>
                  <button type="button" class="btn btn-warning btn-sm" (click)="item.cancel()"
                    [disabled]="!item.isUploading">
                    <span class="glyphicon glyphicon-ban-circle"></span> Cancel
                  </button>
                  <button type="button" class="btn btn-danger btn-sm" (click)="item.remove()">
                    <span class="glyphicon glyphicon-trash"></span> Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="text-xs-center">
        <button type="button" class="btn btn-success btn-s"
          (click)="uploader.uploadAll()" [disabled]="!uploader.getNotUploadedItems().length">
          <span class="glyphicon glyphicon-upload"></span> Upload all
        </button>
        <button type="button" class="btn btn-warning btn-s"
          (click)="uploader.cancelAll()" [disabled]="!uploader.isUploading">
          <span class="glyphicon glyphicon-ban-circle"></span> Cancel all
        </button>
        <button type="button" class="btn btn-danger btn-s"
          (click)="uploader.clearQueue()" [disabled]="!uploader.queue.length">
          <span class="glyphicon glyphicon-trash"></span> Remove all
        </button>
      </div>
    </div>
  `,
  styles: [
    `
    .nv-file-over {
      background: rgba(100,181,246, 0.5);
    }
    .btn-bs-file{
      position:relative;
    }
    .btn-bs-file input[type="file"]{
      position: absolute;
      top: -9999999;
      filter: alpha(opacity=0);
      opacity: 0;
      width:0;
      height:0;
      outline: none;
      cursor: inherit;
    }
  `,
  ],
})
export class UiUploaderComponent implements OnInit {
  @Input() url: string

  public uploader: FileUploader
  public fileOver = false
  public fileOverTrigger(e: any): void {
    this.fileOver = e
  }

  ngOnInit() {
    this.uploader = new FileUploader({
      url: this.url,
    })
    this.uploader.clearQueue()
  }
}
