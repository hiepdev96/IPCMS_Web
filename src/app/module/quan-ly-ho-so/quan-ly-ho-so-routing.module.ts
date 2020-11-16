import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
import { ImportHoSoComponent } from './import-ho-so/import-ho-so.component';
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
        path: 'import-ho-so',
        data: {
          title: 'Import hồ sơ'
        },
        component: ImportHoSoComponent
      },
      {
        path: 'danh-sach-ho-so',
        data: {
          title: 'Danh sách hồ sơ'
        },
        component: DanhSachHoSoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyHoSoRoutingModule { }
