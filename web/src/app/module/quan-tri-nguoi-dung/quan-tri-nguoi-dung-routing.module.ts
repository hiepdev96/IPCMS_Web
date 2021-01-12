import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachNguoiDungComponent } from './danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';
import { LichSuHoatDongComponent } from './lich-su-hoat-dong/lich-su-hoat-dong.component';

import { QuanTriNguoiDungComponent } from './quan-tri-nguoi-dung.component';
import { TaoNguoiDungComponent } from './tao-nguoi-dung/tao-nguoi-dung.component';
import { ThongTinCaNhanComponent } from './thong-tin-ca-nhan/thong-tin-ca-nhan.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản trị người dùng'
    },
    children: [
      {
        path: 'tao-nguoi-dung',
        component: TaoNguoiDungComponent,
        data: {
          title: 'Tạo người dùng'
        }
      },
      {
        path: 'thong-tin-ca-nhan',
        component: ThongTinCaNhanComponent,
        data: {
          title: 'Thông tin cá nhân'
        }
      },
      {
        path: 'danh-sach-nguoi-dung',
        component: DanhSachNguoiDungComponent,
        data: {
          title: 'Danh sách người dùng'
        }
      },
      {
        path: 'lich-su-hoat-dong',
        component: LichSuHoatDongComponent,
        data: {
          title: 'Lịch sử hoạt động'
        }
      },
      {
        path: 'quan-ly-nguoi-dung',
        data: {
          title: 'Quản lý người dùng'
        },
        component: QuanTriNguoiDungComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanTriNguoiDungRoutingModule { }
