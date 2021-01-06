import { Component, Inject, OnInit, ɵConsole } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-tieu-chi-cham-diem-tin-dung-dialog',
  templateUrl: './update-tieu-chi-cham-diem-tin-dung-dialog.component.html',
  styleUrls: ['./update-tieu-chi-cham-diem-tin-dung-dialog.component.scss']
})
export class UpdateTieuChiChamDiemTinDungDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
