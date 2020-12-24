import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoRoutingModule } from './bao-cao-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaoCaoSoLuongHoSoComponent } from './bao-cao-so-luong-ho-so/bao-cao-so-luong-ho-so.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { BaoCaoPhanBoTheoThoiGianComponent } from './bao-cao-phan-bo-theo-thoi-gian/bao-cao-phan-bo-theo-thoi-gian.component';
import { ChartModule } from 'angular-highcharts';
import { BaoCaoTheoKhuVucDiaLyComponent } from './bao-cao-theo-khu-vuc-dia-ly/bao-cao-theo-khu-vuc-dia-ly.component';
import { BaoCaoLichSuNguoiDungComponent } from './bao-cao-lich-su-nguoi-dung/bao-cao-lich-su-nguoi-dung.component';
import { BaoCaoNguoiDungTheoKhuVucDiaLyComponent } from './bao-cao-nguoi-dung-theo-khu-vuc-dia-ly/bao-cao-nguoi-dung-theo-khu-vuc-dia-ly.component';
import { BaoCaoNguoiDungTheoTrangThaiComponent } from './bao-cao-nguoi-dung-theo-trang-thai/bao-cao-nguoi-dung-theo-trang-thai.component';

@NgModule({
  declarations: [
    BaoCaoSoLuongHoSoComponent,
    BaoCaoPhanBoTheoThoiGianComponent,
    BaoCaoTheoKhuVucDiaLyComponent,
    BaoCaoLichSuNguoiDungComponent,
    BaoCaoNguoiDungTheoKhuVucDiaLyComponent,
    BaoCaoNguoiDungTheoTrangThaiComponent
  ],
  imports: [
    CommonModule,
    BaoCaoRoutingModule,
    SharedModule,
    ChartModule

  ]
})
export class BaoCaoModule { }
