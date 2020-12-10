import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoRoutingModule } from './bao-cao-routing.module';
import { BaoCaoComponent } from './bao-cao.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaoCaoSoLuongHoSoComponent } from './bao-cao-so-luong-ho-so/bao-cao-so-luong-ho-so.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { BaoCaoPhanBoTheoThoiGianComponent } from './bao-cao-phan-bo-theo-thoi-gian/bao-cao-phan-bo-theo-thoi-gian.component';


@NgModule({
  declarations: [
    BaoCaoComponent,
    BaoCaoSoLuongHoSoComponent,
    BaoCaoPhanBoTheoThoiGianComponent
  ],
  imports: [
    CommonModule,
    BaoCaoRoutingModule,
    SharedModule,

  ]
})
export class BaoCaoModule { }
