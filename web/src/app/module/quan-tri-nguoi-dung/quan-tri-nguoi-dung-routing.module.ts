import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuanTriNguoiDungComponent } from './quan-tri-nguoi-dung.component';
import { TaoNguoiDungComponent } from './tao-nguoi-dung/tao-nguoi-dung.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tao-nguoi-dung',
        component: TaoNguoiDungComponent,
        data: {
          title: 'Tạo người dùng'
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
