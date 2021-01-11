import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListRoleUser } from 'src/app/common/data';
import { User } from 'src/app/common/model/generic-model';
import { UserClient } from 'src/app/connection/user-connector';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-nguoi-dung',
  templateUrl: './form-nguoi-dung.component.html',
  styleUrls: ['./form-nguoi-dung.component.scss']
})
export class FormNguoiDungComponent implements OnInit {
  myForm = new FormGroup({
    fullNameCtrl: new FormControl('', [Validators.required]),
    phoneNumberCtrl: new FormControl(),
    emailCtrl: new FormControl(),
    roleCtrl: new FormControl(),
    userIdCtrl: new FormControl(),
    organizationCtrl: new FormControl(),
    positionCtrl: new FormControl(),
    addressCtrl: new FormControl(),
    noteCtrl: new FormControl(),
  });
  lstScope: number[] = [1, 2, 3];
  step = 0;
  lstRole = ListRoleUser;
  @Input() $item: User;
  ctrls = this.myForm.controls;
  constructor(
    private authService: AuthService,
    private userClient: UserClient
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
    this.ctrls.userIdCtrl.disable();
    if (this.getRole() !== 'ADMIN') {
      this.ctrls.roleCtrl.disable();
    }
  }
  addScope(): void {
    this.lstScope.push(1);
    this.step = this.lstScope.length - 1;
  }
  removeScope(): void {
    this.lstScope.splice(0, 1);
  }
  setStep(idx: number): void {
    this.step = idx;
  }
  closed(): void {
    this.step = null;
  }
  getRole(): string {
    return this.authService.getRole();
  }
  getControls(): any {
    return this.ctrls;
  }
  valid(): any {
    return this.myForm.valid;
  }
  markAllAsTouched(): void {
    this.myForm.markAllAsTouched();
  }
}
