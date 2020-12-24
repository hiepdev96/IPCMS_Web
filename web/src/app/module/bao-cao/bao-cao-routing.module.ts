import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaoCaoLichSuNguoiDungComponent } from './bao-cao-lich-su-nguoi-dung/bao-cao-lich-su-nguoi-dung.component';
import { BaoCaoNguoiDungTheoKhuVucDiaLyComponent } from './bao-cao-nguoi-dung-theo-khu-vuc-dia-ly/bao-cao-nguoi-dung-theo-khu-vuc-dia-ly.component';
import { BaoCaoNguoiDungTheoTrangThaiComponent } from './bao-cao-nguoi-dung-theo-trang-thai/bao-cao-nguoi-dung-theo-trang-thai.component';
import { BaoCaoPhanBoTheoThoiGianComponent } from './bao-cao-phan-bo-theo-thoi-gian/bao-cao-phan-bo-theo-thoi-gian.component';
import { BaoCaoSoLuongHoSoComponent } from './bao-cao-so-luong-ho-so/bao-cao-so-luong-ho-so.component';
import { BaoCaoTheoKhuVucDiaLyComponent } from './bao-cao-theo-khu-vuc-dia-ly/bao-cao-theo-khu-vuc-dia-ly.component';

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
          title: 'Số lượng hồ sơ theo thời gian'
        },
        component: BaoCaoPhanBoTheoThoiGianComponent
      },
      {
        path: 'khu-vuc-dia-ly',
        data: {
          title: 'Số lượng hồ sơ theo khu vực địa ly'
        },
        component: BaoCaoTheoKhuVucDiaLyComponent
      },
      {
        path: 'nguoi-dung-theo-khu-vuc-dia-ly',
        data: {
          title: 'Người dùng theo khu vực địa lý'
        },
        component: BaoCaoNguoiDungTheoKhuVucDiaLyComponent
      },
      {
        path: 'nguoi-dung-theo-trang-thai',
        data: {
          title: 'Người dùng theo trạng thái'
        },
        component: BaoCaoNguoiDungTheoTrangThaiComponent
      },
      {
        path: 'lich-su-nguoi-dung',
        data: {
          title: 'Lịch sử người dùng'
        },
        component: BaoCaoLichSuNguoiDungComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoRoutingModule { }
