import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StatusProfileConstant } from 'src/app/common/constants/status-profile-constant';
import { ListStatusProfile } from 'src/app/common/data';
import { TelesaleRequest } from 'src/app/common/model/generic-model';

@Component({
  selector: 'app-confirm-chot-ho-so',
  templateUrl: './confirm-chot-ho-so.component.html',
  styleUrls: ['./confirm-chot-ho-so.component.scss']
})
export class ConfirmChotHoSoComponent implements OnInit {
  myForm = new FormGroup({
    statusControl: new FormControl('', [Validators.required]),
    tinhThanhCtrl: new FormControl(),
    quanHuyenCtrl: new FormControl(),
    phuongXaCtrl: new FormControl(),
    noteCtrl: new FormControl(),
  });
  isSubbmit = false;
  isShowScope: boolean;
  ctrls = this.myForm.controls;
  listStatusProfile: any;
  lstStatusUse = [
    StatusProfileConstant.MOI,
    StatusProfileConstant.CHOT,
    StatusProfileConstant.KHACH_HANG_TU_CHOI,
    StatusProfileConstant.HUY
  ];
  constructor(
    public dialogRef: MatDialogRef<ConfirmChotHoSoComponent>
  ) {
    this.listStatusProfile = ListStatusProfile.filter(x => this.lstStatusUse.includes(x.value));
  }

  ngOnInit(): void {
    this.ctrls.statusControl.valueChanges
      .subscribe(x => {
        if (x && x.value === StatusProfileConstant.CHOT) {
          this.isShowScope = true;
          this.ctrls.tinhThanhCtrl.setValidators(Validators.required);
          this.ctrls.quanHuyenCtrl.setValidators(Validators.required);
          this.ctrls.phuongXaCtrl.setValidators(Validators.required);
        } else {
          this.isShowScope = false;
          this.ctrls.tinhThanhCtrl.clearValidators();
          this.ctrls.quanHuyenCtrl.clearValidators();
          this.ctrls.phuongXaCtrl.clearValidators();
          this.ctrls.tinhThanhCtrl.updateValueAndValidity();
          this.ctrls.quanHuyenCtrl.updateValueAndValidity();
          this.ctrls.phuongXaCtrl.updateValueAndValidity();
        }
      });
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
    this.myForm.markAllAsTouched();
    this.isSubbmit = true;
    if (this.myForm.valid) {
      this.dialogRef.close(new TelesaleRequest({
        note: this.ctrls.noteCtrl.value,
        status_profile: this.ctrls.statusControl.value.value,
        scope
      }));
    }
  }
}
