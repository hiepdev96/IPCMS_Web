import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { finalize, map } from 'rxjs/operators';
import { GenericResponse, User, UserDetailResponse, UserUpdateRequest } from 'src/app/common/model/generic-model';
import { UserClient } from 'src/app/connection/user-connector';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormNguoiDungComponent } from '../tao-nguoi-dung/form-nguoi-dung/form-nguoi-dung.component';

@Component({
  selector: 'app-thong-tin-ca-nhan',
  templateUrl: './thong-tin-ca-nhan.component.html',
  styleUrls: ['./thong-tin-ca-nhan.component.scss']
})
export class ThongTinCaNhanComponent implements OnInit {
  isShowForm: boolean;
  @ViewChild(FormNguoiDungComponent) $form: FormNguoiDungComponent;
  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private userClient: UserClient,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }
  getUser(): User {
    return this.authService.getUser();
  }
  toggleEditForm(isShow: boolean): void {
    this.isShowForm = isShow;
  }
  onUpdate(): any {
    if (this.$form.valid) {
      this.$form.markAllAsTouched();
      this.spinner.show();
      const ctrls = this.$form.getControls();
      this.userClient.update(new UserUpdateRequest({
        address: ctrls.addressCtrl.value,
        email: ctrls.emailCtrl.value,
        full_name: ctrls.fullNameCtrl.value,
        note: ctrls.noteCtrl.value,
        origanization: ctrls.organizationCtrl.value,
        phone_number: ctrls.phoneNumberCtrl.value,
        position: ctrls.positionCtrl.value,
        update_user_id: this.getUser().user_id
      }))
        .pipe(finalize(() => this.spinner.hide()),
          map(x => GenericResponse.fromJS(x)))
        .subscribe(x => {
          if (x.errorCode !== 'OK') {
            this.alertService.error(x.errorMessage, 'Cập nhật thông tin cá nhân');
          } else {
            this.userClient.detail(this.getUser().user_id)
              .pipe(map(z => UserDetailResponse.fromJS(z)))
              .subscribe(z => {
                if (z.errorCode === 'OK') {
                  this.authService.setUser(z.user);
                  this.toggleEditForm(false);
                }
              });
          }
        });


    }
  }
}
