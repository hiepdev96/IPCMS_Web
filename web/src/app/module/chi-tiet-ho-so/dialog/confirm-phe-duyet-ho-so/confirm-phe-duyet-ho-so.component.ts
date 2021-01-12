import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, map } from 'rxjs/operators';
import { StatusProfileConstant } from 'src/app/common/constants/status-profile-constant';
import { ListStatusProfile } from 'src/app/common/data';
import { GenericResponse } from 'src/app/common/model/generic-model';
import { ProfileClient } from 'src/app/connection/profile-connector';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-confirm-phe-duyet-ho-so',
  templateUrl: './confirm-phe-duyet-ho-so.component.html',
  styleUrls: ['./confirm-phe-duyet-ho-so.component.scss']
})
export class ConfirmPheDuyetHoSoComponent implements OnInit {

  listStatusProfile: any;
  lstStatusUse = [
    StatusProfileConstant.DA_PHE_DUYET_HOAN_THIEN,
    StatusProfileConstant.DANG_HOAN_THIEN
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
    public dialogRef: MatDialogRef<ConfirmPheDuyetHoSoComponent>
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
      this.profileClient.approvalFinishProfile(this.data, status, this.myForm.controls.statusControl.value)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe(x => {
          if (x.errorCode !== 'OK') {
            return this.alertService.error(x.errorMessage ?? '', 'Phê duyệt hồ sơ');
          } else {
            this.alertService.success('Phê duyệt hồ sơ thành công', 'Phê duyệt hồ sơ');
            this.dialogRef.close(true);
          }
        });
    }
  }
}
