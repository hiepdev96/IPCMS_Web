import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListGioiTinh, ListLoaiDinhDanh, ListMappingProfileValue } from 'src/app/common/data';
import { Field, ProfileViewDetailResponse } from 'src/app/common/model/generic-model';

@Component({
  selector: 'app-form-input-ho-so',
  templateUrl: './form-input-ho-so.component.html',
  styleUrls: ['./form-input-ho-so.component.scss']
})
export class FormInputHoSoComponent implements OnInit {

  @Input() $item: ProfileViewDetailResponse;
  myForm = new FormGroup({
    hoTenCtrl: new FormControl(),
    ngaySinhCtrl: new FormControl(),
    loaiDinhDanhCtrl: new FormControl(),
    soDinhDanhCtrl: new FormControl(),
    gioiTinhCtrl: new FormControl(),
    hoKhauThuongTruCtrl: new FormControl(),
    ngayCapCtrl: new FormControl(),
    noiCapCtrl: new FormControl(),
    hieuLucDenCtrl: new FormControl(),
    quocTichCtrl: new FormControl(),
    soDienThoaiCtrl: new FormControl(),
    soDienThoaiThamChieu1Ctrl: new FormControl('', [Validators.required]),
    soDienThoaiThamChieu2Ctrl: new FormControl(),
    emailCtrl: new FormControl(),
    diaChiCtrl: new FormControl(),
    thuNhapThangCtrl: new FormControl(),
    nhaOCtrl: new FormControl(),
    gioiTinhHienTaiCtrl: new FormControl(),
    trinhDoHocVanCtrl: new FormControl(),
    danhHieuCtrl: new FormControl(),
    loaiDonViCongTacCtrl: new FormControl(),
    capQuanLyCtrl: new FormControl(),
    soHopDongBaoHiemCtrl: new FormControl(),
    soTheTinDungCtrl: new FormControl(),
    tongDuNoTinDungCtrl: new FormControl(),
    lichSuTinDungCtrl: new FormControl(),
    noXauCtrl: new FormControl(),
    tongGiaTriDamBaoCtrl: new FormControl(),
    tinhThanhKhoanCtrl: new FormControl(),
    loaiKhoanVayCtrl: new FormControl(),
    sanPhamChoVayCtrl: new FormControl(),
    soTienVayCtrl: new FormControl(),
    kyHanCtrl: new FormControl(),
    hinhThucVayCtrl: new FormControl(),
    hinhThucThanhToanCtrl: new FormControl(),
    laiSuatCtrl: new FormControl(),
    mucDichVayCtrl: new FormControl(),
    loaiKhachHangCtrl: new FormControl(),
    diemTinDungCtrl: new FormControl(),
    hangTinDungCtrl: new FormControl(),
    tuoiCtrl: new FormControl(),
    tinhTrangHonNhanCtrl: new FormControl(),
    soNguoiPhuThuocCtrl: new FormControl(),
  });
  ctrls = this.myForm.controls;
  lstGioiTinh = ListGioiTinh;
  lstField: Field[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.$item);
    this.$item.profile.forEach(x => {
      this.lstField = this.lstField.concat(x.listFields);
    });
    console.log(this.lstField.map(x => x.name).sort());
    this.setValueForm();
  }
  setValueForm(): void {
    ListMappingProfileValue.forEach(x => {
      this.ctrls[x.nameCtrl].setValue(x.getValue(this.lstField));
    });
    console.log(this.ctrls.gioiTinhCtrl.value);
  }
  getListSelect(nameCtrl: string): any {
    return ListMappingProfileValue.find(x => x.nameCtrl === nameCtrl)?.lstSelect;
  }
  getListParameter(): any {
  }

}
