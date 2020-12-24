import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackTestComponent } from './back-test/back-test.component';
import { HangTinDungComponent } from './hang-tin-dung/hang-tin-dung.component';

import { TieuChiChamDiemTinDungComponent } from './tieu-chi-cham-diem-tin-dung/tieu-chi-cham-diem-tin-dung.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Điểm và xếp hạng tín dụng'
    },
    children: [
      {
        path: 'tieu-chi-cham-diem-tin-dung',
        component: TieuChiChamDiemTinDungComponent,
        data: {
          title: 'Tiêu chí chấm điểm tín dụng'
        }
      },
      {
        path: 'hang-tin-dung',
        component: HangTinDungComponent,
        data: {
          title: 'Hạng tín dụng'
        }
      },
      {
        path: 'back-test',
        component: BackTestComponent,
        data: {
          title: 'Backtest'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiemVaXepHangTinDungRoutingModule { }
