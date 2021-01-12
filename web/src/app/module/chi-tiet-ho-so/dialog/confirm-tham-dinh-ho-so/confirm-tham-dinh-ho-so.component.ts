import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, map } from 'rxjs/operators';
import { StatusProfileConstant } from 'src/app/common/constants/status-profile-constant';
import { ListStatusProfile } from 'src/app/common/data';
import { GenericResponse, ProfileViewDetailResponse } from 'src/app/common/model/generic-model';
import { ProfileClient } from 'src/app/connection/profile-connector';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-confirm-tham-dinh-ho-so',
  templateUrl: './confirm-tham-dinh-ho-so.component.html',
  styleUrls: ['./confirm-tham-dinh-ho-so.component.scss']
})
export class ConfirmThamDinhHoSoComponent implements OnInit {
  listStatusProfile: any;
  lstStatusUse = [
    StatusProfileConstant.DA_THAM_DINH_DAT,
    StatusProfileConstant.THAM_DINH_KHONG_DAT,
    StatusProfileConstant.DA_PHE_DUYET_HOAN_THIEN
  ];
  myForm = new FormGroup({
    statusControl: new FormControl('', [Validators.required]),
    noteCtrl: new FormControl()
  });
  constructor(
    private spinner: NgxSpinnerService,
    private profileClient: ProfileClient,
    private alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<ConfirmThamDinhHoSoComponent>
  ) {
    this.listStatusProfile = ListStatusProfile.filter(x => this.lstStatusUse.includes(x.value));
  }

  ngOnInit(): void {
  }
  onClose(): void {
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      const status = this.myForm.controls.statusControl.value.value;
      this.spinner.show();
      this.profileClient.verifyFinishProfile(this.data, status, this.myForm.controls.noteCtrl.value)
        .pipe(finalize(() => this.spinner.hide()),
          map(x => GenericResponse.fromJS(x)))
        .subscribe(x => {

          if (x.errorCode !== 'OK') {
            return this.alertService.error(x.errorMessage, 'Thẩm định hồ sơ');
          } else {
            this.alertService.success('Thẩm định hồ sơ thành công', 'Thẩm định hồ sơ');
            this.dialogRef.close(true);
          }
        });
    }
  }
}
