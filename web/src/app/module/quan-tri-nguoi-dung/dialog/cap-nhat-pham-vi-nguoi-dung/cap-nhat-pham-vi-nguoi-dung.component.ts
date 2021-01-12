import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { UserScope, UserScopeRequest } from 'src/app/common/model/generic-model';

@Component({
  selector: 'app-cap-nhat-pham-vi-nguoi-dung',
  templateUrl: './cap-nhat-pham-vi-nguoi-dung.component.html',
  styleUrls: ['./cap-nhat-pham-vi-nguoi-dung.component.scss']
})
export class CapNhatPhamViNguoiDungComponent implements OnInit {

  myForm = new FormGroup({
    tinhThanhCtrl: new FormControl(),
    quanHuyenCtrl: new FormControl(),
    phuongXaCtrl: new FormControl(),
    fromDateCtrl: new FormControl('', [Validators.required]),
    toDateCtrl: new FormControl('', [Validators.required])
  });
  ctrls = this.myForm.controls;
  submitted: boolean;
  constructor(
    public dialogRef: MatDialogRef<CapNhatPhamViNguoiDungComponent>
  ) { }

  ngOnInit(): void {
  }
  onAdd(): void {
    this.myForm.markAllAsTouched();
    console.log(this.ctrls);
    let scope = '/';
    this.submitted = true;
    if (this.ctrls.tinhThanhCtrl.value) {
      scope += this.ctrls.tinhThanhCtrl.value.name;
      if (this.ctrls.quanHuyenCtrl.value) {
        scope += '/' + this.ctrls.quanHuyenCtrl.value.name;
        if (this.ctrls.phuongXaCtrl.value) {
          scope += '/' + this.ctrls.phuongXaCtrl.value.name;
        }
      }
    }
    if (this.myForm.valid) {
      const start_date = moment(this.ctrls.fromDateCtrl.value).format('YYYY-MM-DD');
      const exp_date = moment(this.ctrls.toDateCtrl.value).format('YYYY-MM-DD');
      this.dialogRef.close(new UserScopeRequest({
        exp_date,
        start_date,
        scope
      }));
    }
  }
}
