import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Profile, ProfileViewDetailRequest, ProfileViewDetailResponse } from 'src/app/common/model/generic-model';
import { Tab } from 'src/app/common/model/tab';
import { ProfileClient } from 'src/app/connection/profile-connector';
import { AlertService } from 'src/app/services/alert.service';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
@Component({
  selector: 'app-quan-ly-ho-so',
  templateUrl: './quan-ly-ho-so.component.html',
  styleUrls: ['./quan-ly-ho-so.component.scss']
})
export class QuanLyHoSoComponent implements OnInit {

  tabs: Tab<ProfileViewDetailResponse>[] = [];

  @ViewChild(DanhSachHoSoComponent) _dsHoSo: DanhSachHoSoComponent;
  index = 0;
  indexDynamic = 1;
  constructor(
    private profileClient: ProfileClient,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    // this.openDetail(new Tab<ProfileViewDetailResponse>({
    //   id: '271',
    //   name: 'Test',
    //   value: null,
    //   status: '3'
    // }));
  }
  showDetail(value: any): void {
    let open = null;
    open = this.tabs.find(x => x.id === value.request.id_profile);
    if (open) {
      this.openDetail(open);
    } else {
      this.profileClient.viewDetail(value.request)
        .pipe(
          map(x => ProfileViewDetailResponse.fromJS(x)),
        ).subscribe(x => {
          if (x.errorCode !== 'OK') {
            return this.alertService.error(x.errorMessage, 'Lỗi xem chi tiết hồ sơ');
          } else {
            let isShowClose = true;

            if (x.role === 'TELESALE') {
              isShowClose = false;
            }
            this.openDetail(new Tab({
              id: value.request.id_profile,
              value: x,
              name: value.name,
              status: value.status
            }));
          }
        });
    }
  }
  closeAndReload(id: string): void {
    this.removeTab(id);
    this._dsHoSo.onSearch();
  }
  removeTab(id: string): void {
    const index = this.tabs.findIndex(x => x.id === id);
    this.tabs.splice(index, 1);
    if (this.index === index + this.indexDynamic) {
      this.index = 0;
    }
  }
  openDetail(tab: Tab<ProfileViewDetailResponse>): void {
    let open = null;
    open = this.tabs.find(x => x.id === tab.id);
    if (open) {
      this.index = this.tabs.indexOf(open) + this.indexDynamic;
    } else {
      this.tabs.push(tab);
      this.index = (this.tabs.length - 1) + this.indexDynamic;
    }
  }
  changeSelectedIndex(index: number): void {
    this.index = index;
  }
}
