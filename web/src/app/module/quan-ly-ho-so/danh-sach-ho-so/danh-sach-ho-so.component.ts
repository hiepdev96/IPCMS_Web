import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListClassifyCustomer, ListFormPayment, ListLoanForm, ListStatusProfile, ListTypeCustomer, ListTypeOfLoan } from './../../../common/data';
import * as moment from 'moment';
import { ProfileClient } from './../../../connection/profile-connector';
import { AlertService } from 'src/app/services/alert.service';
import { dateToString } from 'src/app/common/functions';
import { merge } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FilterProfileRequest, FilterProfileResponse, Profile, ProfileViewDetailRequest, ProfileViewDetailResponse } from 'src/app/common/model/generic-model';
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
    'id_number',
    'fullname',
    'scope',
    'status',
    'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  isShowAdvanced: boolean;
  ctrls = this.myForm.controls;
  page = 1;
  lstResult: Profile[] = [];
  isShowLoadMore = true;
  isShowProgress = true;
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
    this.isShowProgress = true;
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
      .pipe(
        map(x => FilterProfileResponse.fromJS(x)),
        finalize(() => this.isShowProgress = false)
      )
      .subscribe(x => {
        if (x.errorCode !== 'OK') {
          return this.alertService.error(x.errorMessage, 'Lỗi lọc hồ sơ');
        } else {
          if (x.list_new_profile) {
            this.lstResult = this.lstResult.concat(x.list_new_profile);
          }
          if (x.list_old_profile) {
            this.lstResult = this.lstResult.concat(x.list_old_profile);
          }
          if ((!x.list_new_profile || !x.list_new_profile.length)
            && (!x.list_old_profile || !x.list_old_profile.length)) {
            this.isShowLoadMore = false;
          }
          console.log(this.lstResult);
        }
      });
  }
  onSearch(): void {
    this.page = 1;
    this.lstResult = [];
    this.isShowLoadMore = true;
    this.filterProfile();
  }
  seeMore(): void {
    this.page += 1;
    this.filterProfile();
  }
  getStatusName(status: string): string {
    return ListStatusProfile.find(x => x.value === status)?.name;
  }
  showDetail(item: Profile): void {
    const request = new ProfileViewDetailRequest({
      id_profile: item.id_profile
    });
    if (this.isShowAdvanced) {
      request.classify_cutomer = this.ctrls.classifyCutomerCtrl.value?.value;
    }
    this.profileClient.viewDetail(request)
      .pipe(
        map(x => ProfileViewDetailResponse.fromJS(x)),
        finalize(() => this.isShowProgress = false)
      ).subscribe(x => {
        if (x.errorCode !== 'OK') {
          return this.alertService.error(x.errorMessage, 'Lỗi lọc hồ sơ');
        } else {
          console.log(x);
        }
      });
    // const features =
    //   'toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,resizable=yes,status=yes,left=0,top=0';
    // const page = window.open('./#/chi-tiet-ho-so', '_blank', features);
  }
}
