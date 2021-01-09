import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileDinhKem } from 'src/app/common/model/generic-model';
import { ListWithTitle } from 'src/app/common/model/lst-with-title';
import { ProfileClient } from 'src/app/connection/profile-connector';

@Component({
  selector: 'app-file-dinh-kem-dialog',
  templateUrl: './file-dinh-kem-dialog.component.html',
  styleUrls: ['./file-dinh-kem-dialog.component.scss']
})
export class FileDinhKemDialogComponent implements OnInit {
  file: any;
  resultFileName: any;
  @ViewChild('download') download: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: ListWithTitle<FileDinhKem>[],
    private profileClient: ProfileClient
  ) { }

  ngOnInit(): void {
  }
  convertToDate(value: string): Date {
    const res = new Date(value + 'Z');
    if (res.toString() !== 'Invalid Date') {
      return res;
    }
    return null;
  }
  viewFile(value: FileDinhKem): void {
    console.log(value);
    this.profileClient.viewDoc(value.dinh_danh_ho_so, value.dinh_danh_tai_lieu)
      .subscribe(x => {
        // tslint:disable-next-line: no-string-literal
        this.file = x['url'];
        if (this.file) {
          this.resultFileName = value.ten_file;
          setTimeout(() => this.download.nativeElement.click(), 200);
        }
      });
  }
}
