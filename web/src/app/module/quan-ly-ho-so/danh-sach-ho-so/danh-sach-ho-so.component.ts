import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListClassifyCustomer, ListFormPayment, ListLoanForm, ListTypeCustomer, ListTypeOfLoan } from './../../../common/data';
import * as moment from 'moment';
import { ProfileClient } from './../../../connection/profile-connector';
import { AlertService } from 'src/app/services/alert.service';
import { dateToString } from 'src/app/common/functions';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterProfileRequest, FilterProfileResponse } from 'src/app/common/model/generic-model';
@Component({
  selector: 'app-danh-sach-ho-so',
  templateUrl: './danh-sach-ho-so.component.html',
  styleUrls: ['./danh-sach-ho-so.component.scss']
})
export class DanhSachHoSoComponent implements OnInit, AfterViewInit {
  listClassifyCustomer = ListClassifyCustomer;
  listLoanForm = ListLoanForm;
  listTypeCustomer = ListTypeCustomer;
  listFormPayment = ListFormPayment;
  listTypeOfLoan = ListTypeOfLoan;
  myForm = new FormGroup({
    productLoanCtrl: new FormControl(),
    createFromToCtrl: new FormControl({
      fromDate: moment().subtract(29, 'days'),
      toDate: moment()
    }),
    idNumberCtrl: new FormControl(),
    fullNameCtrl: new FormControl(),
    phoneNumberCtrl: new FormControl(),
    formPaymentCtrl: new FormControl(),
    loanFormCtrl: new FormControl(null),
    typeCustomerCtrl: new FormControl(),
    typeOfLoanCtrl: new FormControl(),
    classifyCutomerCtrl: new FormControl(null)
  });


  displayedColumns: string[] = [
    'postion',
    'tenKhachHang',
    'soDienThoai',
    'loaiKhoanVay',
    // 'diemTinDung',
    // 'xepHangTinDung',
    'trangThai',
    'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  isShowAdvanced: boolean;
  ctrls = this.myForm.controls;
  page = 1;
  constructor(
    private profileClient: ProfileClient,
    private alertService: AlertService
  ) {
  }
  ngOnInit(): void {
    merge(
      this.ctrls.productLoanCtrl.valueChanges,
      this.ctrls.createFromToCtrl.valueChanges
    )
      .subscribe(x => {
        if (!this.isShowAdvanced) {
          this.filterProfile();
        }
      });
  }
  ngAfterViewInit(): void {
    this.filterProfile();
  }
  setShowAdvanced(value: boolean): void {
    this.isShowAdvanced = value;
  }
  filterProfile(): void {
    const request = new FilterProfileRequest({
      product_loan: this.ctrls.productLoanCtrl.value,
    });
    const dateTime = this.ctrls.createFromToCtrl.value;
    if (dateTime) {
      request.create_from = dateToString(dateTime.fromDate);
      request.create_to = dateToString(dateTime.toDate);
    }
    if (this.isShowAdvanced) {
      request.id_number = this.ctrls.idNumberCtrl.value;
      request.full_name = this.ctrls.fullNameCtrl.value;
      request.phone_number = this.ctrls.phoneNumberCtrl.value;
      request.classify_cutomer = this.ctrls.classifyCutomerCtrl.value?.value;
      request.loan_form = this.ctrls.loanFormCtrl.value?.value;
      request.type_customer = this.ctrls.typeCustomerCtrl.value?.value;
      request.form_payment = this.ctrls.formPaymentCtrl.value?.value;
      request.type_of_loan = this.ctrls.typeOfLoanCtrl.value?.value;
    }
    this.profileClient.filterProfile(this.page, request)
      .pipe(map(x => FilterProfileResponse.fromJS(x)))
      .subscribe(x => {
        console.log(x);
      });
  }
  onSearch(): void {
    this.page = 0;
    this.filterProfile();
  }

  showDetail(): void {
    const features =
      'toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,resizable=yes,status=yes,left=0,top=0';
    const page = window.open('./#/chi-tiet-ho-so', '_blank', features);
  }
}
export const datas = [
  {
    tenKhachHang: 'Tạ Đức Hiệp',
    xepHangTinDung: 'A',
    diemTinDung: '99',
    trangThai: 'Mới',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiền mặt'
  },
  {
    tenKhachHang: 'Nguyễn Văn A',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'Đã chốt',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiêu dùng/ trả góp'
  },
  {
    tenKhachHang: 'Nguyễn Văn Trung Văn',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'ĐÃ HOÀN THIỆN',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Thẻ tín dụng'
  }, {
    tenKhachHang: 'Tạ Đức Hiệp',
    xepHangTinDung: 'A',
    diemTinDung: '99',
    trangThai: 'Mới',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Thấu chi'
  },
  {
    tenKhachHang: 'Nguyễn Văn A',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'Đã chốt',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Thấu chi'
  },
  {
    tenKhachHang: 'Nguyễn Văn Trung Văn',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'ĐÃ HOÀN THIỆN',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiền mặt'
  }, {
    tenKhachHang: 'Tạ Đức Hiệp',
    xepHangTinDung: 'A',
    diemTinDung: '99',
    trangThai: 'Mới',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Thẻ tín dụng'
  },
  {
    tenKhachHang: 'Nguyễn Văn A',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'Đã chốt',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiền mặt'
  },
  {
    tenKhachHang: 'Nguyễn Văn Trung Văn',
    xepHangTinDung: 'AAA',
    diemTinDung: '66',
    trangThai: 'ĐÃ HOÀN THIỆN',
    soDienThoai: '0975290896',
    loaiKhoanVay: 'Tiêu dùng/ trả góp'
  }
];

