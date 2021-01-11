import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, map } from 'rxjs/operators';
import { UserDetailResponse } from 'src/app/common/model/generic-model';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserClient } from '../../connection/user-connector';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm = new FormGroup({
    userIdCtrl: new FormControl('', [Validators.required]),
    secretKeyCtrl: new FormControl('', [Validators.required])
  });
  ctrls = this.myForm.controls;
  constructor(
    private authService: AuthService,
    private userClient: UserClient,
    private spinner: NgxSpinnerService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.myForm.controls);
    if (this.myForm.valid) {
      this.spinner.show();
      const userId: string = this.ctrls.userIdCtrl.value;
      const secretKey: string = this.ctrls.secretKeyCtrl.value;
      this.authService.setUserIDAndSecretKey(userId.trim(), secretKey.toUpperCase());
      this.userClient.detail(userId)
        .pipe(finalize(() => this.spinner.hide()))
        .pipe(map(x => UserDetailResponse.fromJS(x)))
        .subscribe(x => {
          console.log(x);
          if (x.errorCode !== 'OK') {
            this.authService.removeUserIdAndSecretkey();
            this.alertService.error(x.errorMessage, 'Lỗi đăng nhập');
          } else {
            this.authService.setUser(x.user);
            this.router.navigateByUrl('dashboard');
          }
        });
    }
  }
}
