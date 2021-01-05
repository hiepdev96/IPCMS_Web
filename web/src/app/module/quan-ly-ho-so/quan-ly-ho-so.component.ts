import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Profile, ProfileViewDetailRequest, ProfileViewDetailResponse } from 'src/app/common/model/generic-model';
import { Tab } from 'src/app/common/model/tab';
import { ProfileClient } from 'src/app/connection/profile-connector';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-quan-ly-ho-so',
  templateUrl: './quan-ly-ho-so.component.html',
  styleUrls: ['./quan-ly-ho-so.component.scss']
})
export class QuanLyHoSoComponent implements OnInit {

  tabs: Tab<ProfileViewDetailResponse>[] = [];
  index = 0;
  indexDynamic = 1;
  constructor(
    private profileClient: ProfileClient,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.openDetail(new Tab({
      id: '123',
      value: null,
      name: 'TEST'
    }));
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
            this.openDetail(new Tab({
              id: value.request.id_profile,
              value: x,
              name: value.name
            }));
          }
        });
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
