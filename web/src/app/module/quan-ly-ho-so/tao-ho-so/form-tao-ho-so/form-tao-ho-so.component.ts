import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-tao-ho-so',
  templateUrl: './form-tao-ho-so.component.html',
  styleUrls: ['./form-tao-ho-so.component.scss']
})
export class FormTaoHoSoComponent implements OnInit {
  myForm = new FormGroup({
    nameCtrl: new FormControl(),
    birthdayCtrl: new FormControl(),
    loaiGiayToDinhDanhCtrl: new FormControl(),
    soDinhDanhCtrl: new FormControl(),
    gioiTinhCtrl: new FormControl(),
    hoKhauThuongTruCtrl: new FormControl(),
    ngayCapCtrl: new FormControl(),
    noiCapCtrl: new FormControl(),
    hieuLucCtrl: new FormControl(),
    quocTichCtrl: new FormControl(),
    soDienThoaiCtrl: new FormControl(),
    soDienThoaiThamChieuCtrl: new FormControl(),
    emailCtrl: new FormControl(),
    diaChiCtrl: new FormControl(),
    thuNhapHangThangCtrl: new FormControl(),
    nhaOCtrl: new FormControl(),
    gioiTinhHienTaiCtrl: new FormControl(),
  });
  ctrls = this.myForm.controls;
  lstLoaiGiayToDinhDanh = lstLoaiGiayToDinhDanh;
  lstGioiTinh = lstGioiTinh;
  lstNhaO = lstNhaO;
  constructor() { }

  ngOnInit(): void {
  }
  onAvatarChange(event) {

  }
}

export const lstLoaiGiayToDinhDanh = [
  'Chứng minh nhân dân (9 SỐ)',
  'Chứng minh nhân dân (12 SỐ)',
  'Căn cước công dân',
  'Hộ chiếu',
  'CMT (CAND)'
]
export const lstGioiTinh = [
  'Nam', 'Nữ'
]
export const lstNhaO =[
  
  'Nhà riêng',
  'Nhà thuê'
]