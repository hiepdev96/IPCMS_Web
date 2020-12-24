import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
import { TaoHoSoComponent } from './tao-ho-so/tao-ho-so.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lý hồ sơ'
    },
    children: [
      {
        path: 'tao-ho-so',
        data: {
          title: 'Tạo hồ sơ'
        },
        component: TaoHoSoComponent
      },
      {
        path: 'loc-ho-so',
        data: {
          title: 'Lọc hồ sơ'
        },
        component: DanhSachHoSoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyHoSoRoutingModule { }
