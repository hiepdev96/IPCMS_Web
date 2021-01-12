import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ListRoleUser } from 'src/app/common/data';
import { convertToDate } from 'src/app/common/functions';
import { User, UserScope, UserScopeRequest } from 'src/app/common/model/generic-model';
import { UserClient } from 'src/app/connection/user-connector';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { CapNhatPhamViNguoiDungComponent } from '../../dialog/cap-nhat-pham-vi-nguoi-dung/cap-nhat-pham-vi-nguoi-dung.component';

@Component({
  selector: 'app-form-nguoi-dung',
  templateUrl: './form-nguoi-dung.component.html',
  styleUrls: ['./form-nguoi-dung.component.scss']
})
export class FormNguoiDungComponent implements OnInit {
  myForm = new FormGroup({
    fullNameCtrl: new FormControl('', [Validators.required]),
    phoneNumberCtrl: new FormControl('', [Validators.required]),
    emailCtrl: new FormControl(),
    roleCtrl: new FormControl('', [Validators.required]),
    userIdCtrl: new FormControl('', [Validators.required]),
    organizationCtrl: new FormControl(),
    positionCtrl: new FormControl(),
    addressCtrl: new FormControl(),
    noteCtrl: new FormControl(),
  });
  lstScope: UserScopeRequest[] = [];
  step = 0;
  lstRole = ListRoleUser;
  @Input() $item: User;
  ctrls = this.myForm.controls;
  submitted: boolean;
  constructor(
    private authService: AuthService,
    private userClient: UserClient,
    private dialog: MatDialog,
    private alertService: AlertService
  ) {

  }
  ngOnInit(): void {
    if (this.$item) {
      this.setValueForm();
    }
  }
  setValueForm(): void {
    this.ctrls.fullNameCtrl.setValue(this.$item.full_name);
    this.ctrls.phoneNumberCtrl.setValue(this.$item.phone_number);
    this.ctrls.emailCtrl.setValue(this.$item.email);
    this.ctrls.userIdCtrl.setValue(this.$item.user_id);
    this.ctrls.organizationCtrl.setValue(this.$item.organization);
    this.ctrls.positionCtrl.setValue(this.$item.position);
    this.ctrls.addressCtrl.setValue(this.$item.address);
    this.ctrls.noteCtrl.setValue(this.$item.note);
    this.ctrls.roleCtrl.setValue(this.$item.role);
    if (this.$item.scope) {
      this.lstScope = this.lstScope.concat(this.$item.scope.map(x => new UserScopeRequest({
        exp_date: x.to,
        scope: x.scope,
        start_date: x.from
      })));
    }
    this.ctrls.userIdCtrl.disable();
    this.ctrls.roleCtrl.disable();
  }
  openDialogUpdateScope(): void {
    const dialogRef = this.dialog.open(CapNhatPhamViNguoiDungComponent, {
      panelClass: 'custom-dialog',
      minWidth: '88%'
    });
    dialogRef.afterClosed()
      .subscribe(x => {
        if (x) {
          this.lstScope.push(x);
        }
      });
  }
  removeScope(item: UserScopeRequest): void {
    this.alertService.confirm(`Bạn có chắc chắn muốn xóa phạm vi <b>${item.scope}</b> không?`, 'Xóa phạm vi người dùng')
      .subscribe(z => {
        if (z) {
          const idx = this.lstScope.indexOf(item);
          this.lstScope.splice(idx, 1);
        }
      });
  }
  getRole(): string {
    return this.authService.getRole();
  }
  getControls(): any {
    return this.ctrls;
  }
  valid(): any {
    console.log(this.myForm);
    return this.myForm.valid;
  }
  markAllAsTouched(): void {
    this.submitted = true;
    this.myForm.markAllAsTouched();
  }
  onReset(): void {
    this.myForm.reset();
    this.submitted = false;
    this.lstScope = [];
  }
  getScope(): UserScopeRequest[] {
    if (this.lstScope.length > 0) {
      return this.lstScope;
    }
    return null;
  }
}
