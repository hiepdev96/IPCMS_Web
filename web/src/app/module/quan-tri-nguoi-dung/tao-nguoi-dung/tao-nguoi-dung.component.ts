import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, map } from 'rxjs/operators';
import { UserCreateRequest, UserNewResponse } from 'src/app/common/model/generic-model';
import { UserClient } from 'src/app/connection/user-connector';
import { AlertService } from 'src/app/services/alert.service';
import { FormNguoiDungComponent } from './form-nguoi-dung/form-nguoi-dung.component';

@Component({
  selector: 'app-tao-nguoi-dung',
  templateUrl: './tao-nguoi-dung.component.html',
  styleUrls: ['./tao-nguoi-dung.component.scss']
})
export class TaoNguoiDungComponent implements OnInit {
  @ViewChild(FormNguoiDungComponent) $form: FormNguoiDungComponent;
  constructor(
    private userClient: UserClient,
    private spinner: NgxSpinnerService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }
  onReset(): void {
    this.$form.onReset();
  }
  onCreate(): void {
    this.$form.markAllAsTouched();
    if (this.$form.valid()) {
      const scope = this.$form.getScope();
      if (!scope || scope.length === 0) {
        return this.alertService.error('Bạn phải thêm phạm vi cho người dùng', 'Tạo người dùng');
      }
      this.spinner.show();
      const ctrls = this.$form.getControls();
      this.userClient.new(new UserCreateRequest({
        address: ctrls.addressCtrl.value,
        email: ctrls.emailCtrl.value,
        full_name: ctrls.fullNameCtrl.value,
        new_user_id: ctrls.userIdCtrl.value,
        note: ctrls.noteCtrl.value,
        origanization: ctrls.organizationCtrl.value,
        position: ctrls.positionCtrl.value,
        phone_number: ctrls.phoneNumberCtrl.value,
        role: ctrls.roleCtrl.value,
        scope
      }))
        .pipe(finalize(() => this.spinner.hide()),
          map(x => UserNewResponse.fromJS(x)))
        .subscribe(x => {
          if (x.errorCode !== 'OK') {
            return this.alertService.error(x.errorMessage, 'Tạo người dùng');
          } else {
            this.alertService.success('Tạo người dùng thành công', 'Tạo người dùng');
          }
        });
    }
  }
}
