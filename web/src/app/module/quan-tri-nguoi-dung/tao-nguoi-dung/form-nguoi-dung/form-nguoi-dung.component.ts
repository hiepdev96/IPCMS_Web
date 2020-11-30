import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-nguoi-dung',
  templateUrl: './form-nguoi-dung.component.html',
  styleUrls: ['./form-nguoi-dung.component.scss']
})
export class FormNguoiDungComponent implements OnInit {
  myForm = new FormGroup({
    nameCtrl: new FormControl(),
    phoneCtrl: new FormControl(),
    emailCtrl: new FormControl(),
    roleCtrl: new FormControl(),
    organizationCtrl: new FormControl(),
    positionCtrl: new FormControl(),
    addressCtrl: new FormControl(),
  });
  lstScope: number[] = [1];
  lstFunction = lstFunction;
  constructor() { }

  ngOnInit(): void {
  }
  addScope(): void {
    this.lstScope.push(1);
  }
}
export const lstFunction = [
  'F11 Tạo hồ sơ qua API',
  'F12 Tạo hồ sơ theo danh sách khách hàng tiềm năng ',
  'F13 Tạo hồ sơ sử dụng mobile app (Android, iOS)',
  'F14 Chốt hồ sơ qua telesale',
  'F15 Lọc hồ sơ ',
  'F16 Xem chi tiết hồ sơ '
]
