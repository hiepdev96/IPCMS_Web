import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaoCaoPhanBoTheoThoiGianComponent } from './bao-cao-phan-bo-theo-thoi-gian/bao-cao-phan-bo-theo-thoi-gian.component';
import { BaoCaoSoLuongHoSoComponent } from './bao-cao-so-luong-ho-so/bao-cao-so-luong-ho-so.component';

import { BaoCaoComponent } from './bao-cao.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Báo cáo'
    },
    children: [
      {
        path: 'so-luong-ho-so',
        data: {
          title: 'Báo cáo số lượng hồ sơ'
        },
        component: BaoCaoSoLuongHoSoComponent
      },
      {
        path: 'phan-bo-theo-thoi-gian',
        data: {
          title: 'Báo cáo về phân bố theo thời gian'
        },
        component: BaoCaoPhanBoTheoThoiGianComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoRoutingModule { }
