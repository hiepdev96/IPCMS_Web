import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TelesaleRequest } from 'src/app/common/model/generic-model';

@Component({
  selector: 'app-confirm-chot-ho-so',
  templateUrl: './confirm-chot-ho-so.component.html',
  styleUrls: ['./confirm-chot-ho-so.component.scss']
})
export class ConfirmChotHoSoComponent implements OnInit {
  myForm = new FormGroup({
    tinhThanhCtrl: new FormControl(),
    quanHuyenCtrl: new FormControl(),
    phuongXaCtrl: new FormControl(),
    noteCtrl: new FormControl(),
  });
  ctrls = this.myForm.controls;
  constructor(
    public dialogRef: MatDialogRef<ConfirmChotHoSoComponent>
  ) { }

  ngOnInit(): void {
    this.ctrls.quanHuyenCtrl.valueChanges
      .subscribe(x => console.log('Quận Huyện', x));
    this.ctrls.phuongXaCtrl.valueChanges
      .subscribe(x => console.log('Phường xã', x));
  }
  onClose(): void {
    let scope = '';
    if (this.ctrls.tinhThanhCtrl.value) {
      scope += '/' + this.ctrls.tinhThanhCtrl.value.name;
      if (this.ctrls.quanHuyenCtrl.value) {
        scope += '/' + this.ctrls.quanHuyenCtrl.value.name;
        if (this.ctrls.phuongXaCtrl.value) {
          scope += '/' + this.ctrls.phuongXaCtrl.value.name;
        }
      }
    }
    this.dialogRef.close(new TelesaleRequest({
      note: this.ctrls.noteCtrl.value,
      scope
    }));
  }
}
