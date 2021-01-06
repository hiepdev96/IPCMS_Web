import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileDinhKem } from 'src/app/common/model/generic-model';
import { ListWithTitle } from 'src/app/common/model/lst-with-title';

@Component({
  selector: 'app-file-dinh-kem-dialog',
  templateUrl: './file-dinh-kem-dialog.component.html',
  styleUrls: ['./file-dinh-kem-dialog.component.scss']
})
export class FileDinhKemDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: ListWithTitle<FileDinhKem>[]
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
}
