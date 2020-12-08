import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachNguoiDungComponent } from './danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';

import { QuanTriNguoiDungComponent } from './quan-tri-nguoi-dung.component';
import { TaoNguoiDungComponent } from './tao-nguoi-dung/tao-nguoi-dung.component';

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
        path: 'danh-sach-nguoi-dung',
        component: DanhSachNguoiDungComponent,
        data: {
          title: 'Danh sách người dùng'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanTriNguoiDungRoutingModule { }
