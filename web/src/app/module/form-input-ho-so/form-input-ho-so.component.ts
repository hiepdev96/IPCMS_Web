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
    loaiHinhDonViCongTacCtrl: new FormControl(),
    capQuanLyCtrl: new FormControl(),
    soHopDongBaoHiemCtrl: new FormControl(),
    soTheTinDungCtrl: new FormControl(),
    tongDuNoTinDungCtrl: new FormControl(),
    lichSuTinDungCtrl: new FormControl(),
    noXauCtrl: new FormControl(),
    tongGiaTriDamBaoCtrl: new FormControl(),
    tinhThanhKhoanCtrl: new FormControl(),
    loaiKhoanVayCtrl: new FormControl(),
    tenSanPhamChoVayCtrl: new FormControl(),
    soTienChoVayCtrl: new FormControl(),
    kyHanCtrl: new FormControl(),
    hinhThucChoVayCtrl: new FormControl(),
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
  lstNhaO = lstNhaO;
  lstTrinhDoHocVan = lstTrinhDoHocVan;
  lstLoaiHinhDonViCongTac = lstLoaiHinhDonViCongTac;
  lstCapQuanLy = lstCapQuanLy;
  lstLichSuTinDung = lstLichSuTinDung;
  lstNoXau = lstNoXau;
  lstTinhThanhKhoan = lstTinhThanhKhoan;
  lstLoaiKhoanVay = lstLoaiKhoanVay;
  lstHinhThucChoVay = lstHinhThucChoVay;
  lstHinhThucThanhToan = lstHinhThucThanhToan;
  lstLoaiKhachHang = lstLoaiKhachHang;
  lstHangTinDung = lstHangTinDung;
  lstDoTuoi = lstDoTuoi;
  lstTinhTrangHonNhan = lstTinhTrangHonNhan;
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
}

export const lstNhaO = [

  'Nhà riêng',
  'Nhà thuê'
];
export const lstTrinhDoHocVan = [
  'Không, Không tốt nghiệp PTTH',
  'Phổ thông trung học',
  'Cao đẳng, đại học',
  'Cao học, Có bằng thạc sĩ',
  'Trên cao học, Có bằng tiến sĩ trở lên'
];
export const lstLoaiHinhDonViCongTac = [
  'Không',
  'Công chức/viên chức',
  'Doanh nghiệp nhà nước',
  'Doanh nghiệp FDI',
  'Doanh nghiệp tư nhân'
];
export const lstCapQuanLy = [
  'Không',
  'Nhân viên/chuyên viên',
  'Trưởng nhóm',
  'Trưởng/Phó phòng/Giám đốc/Phó giám đốc trung tâm',
  'Giám đốc/Phó giám đốc công ty'
];
export const lstLichSuTinDung = [
  'Tốt',
  'Trung bình',
  'Xấu'
];
export const lstNoXau = [
  'Có',
  'Không'
];
export const lstTinhThanhKhoan = [
  'Tốt',
  'Trung bình',
  'Kém'
];
export const lstLoaiKhoanVay = [
  'Tiền mặt',
  'Tiêu dùng',
  'Trả góp'
];
export const lstHinhThucChoVay = [
  'Tín chấp',
  'Thế chấp'
];

export const lstHinhThucThanhToan = [
  'Trả góp hàng tháng',
  'Trả góp 1 lần'
];
export const lstLoaiKhachHang = [
  'Khách hàng mới',
  'Khách hàng thân thiết',
  'Khách hàng thường xuyên',
  'Khách hàng VIP',
  'Khách hàng xấu'
];

export const lstHangTinDung = [
  'AAA',
  'AA',
  'A',
  'B',
  'C',
  'D'
];
export const lstDoTuoi = [
  'Vị thành niên',
  'Thanh niên',
  'Trưởng thành',
];
export const lstTinhTrangHonNhan = [
  'Độc thân',
  'Đã lập gia đình'
];

