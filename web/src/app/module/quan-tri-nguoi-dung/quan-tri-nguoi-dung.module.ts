import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanTriNguoiDungRoutingModule } from './quan-tri-nguoi-dung-routing.module';
import { QuanTriNguoiDungComponent } from './quan-tri-nguoi-dung.component';
import { TaoNguoiDungComponent } from './tao-nguoi-dung/tao-nguoi-dung.component';
import { FormNguoiDungComponent } from './tao-nguoi-dung/form-nguoi-dung/form-nguoi-dung.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DanhSachNguoiDungComponent } from './danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';
import { ChiTietNguoiDungComponent } from './chi-tiet-nguoi-dung/chi-tiet-nguoi-dung.component';
import { CapNhatPhamViNguoiDungComponent } from './dialog/cap-nhat-pham-vi-nguoi-dung/cap-nhat-pham-vi-nguoi-dung.component';
import { LichSuHoatDongComponent } from './lich-su-hoat-dong/lich-su-hoat-dong.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    QuanTriNguoiDungComponent,
    TaoNguoiDungComponent,
    FormNguoiDungComponent,
    DanhSachNguoiDungComponent,
    ChiTietNguoiDungComponent,
    CapNhatPhamViNguoiDungComponent,
    LichSuHoatDongComponent],
  imports: [
    CommonModule,
    QuanTriNguoiDungRoutingModule,
    InfiniteScrollModule,
    SharedModule
  ],
  entryComponents: [
    CapNhatPhamViNguoiDungComponent
  ]
})
export class QuanTriNguoiDungModule { }
