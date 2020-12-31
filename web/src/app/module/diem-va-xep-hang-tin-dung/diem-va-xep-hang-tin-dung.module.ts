import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiemVaXepHangTinDungRoutingModule } from './diem-va-xep-hang-tin-dung-routing.module';
import { TieuChiChamDiemTinDungComponent } from './tieu-chi-cham-diem-tin-dung/tieu-chi-cham-diem-tin-dung.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChiTietTieuChiChamDiemTinDungDialogComponent } from './tieu-chi-cham-diem-tin-dung/dialog/chi-tiet-tieu-chi-cham-diem-tin-dung-dialog/chi-tiet-tieu-chi-cham-diem-tin-dung-dialog.component';
import { UpdateTieuChiChamDiemTinDungDialogComponent } from './tieu-chi-cham-diem-tin-dung/dialog/update-tieu-chi-cham-diem-tin-dung-dialog/update-tieu-chi-cham-diem-tin-dung-dialog.component';
import { HangTinDungComponent } from './hang-tin-dung/hang-tin-dung.component';
import { BackTestComponent } from './back-test/back-test.component';
import { DetailBackTestComponent } from './back-test/detail-back-test/detail-back-test.component';
import { ChiTietDuLieuBackTestDialogComponent } from './tieu-chi-cham-diem-tin-dung/dialog/chi-tiet-du-lieu-back-test-dialog/chi-tiet-du-lieu-back-test-dialog.component';


@NgModule({
  declarations: [
    TieuChiChamDiemTinDungComponent,
    ChiTietTieuChiChamDiemTinDungDialogComponent,
    UpdateTieuChiChamDiemTinDungDialogComponent,
    HangTinDungComponent,
    BackTestComponent,
    DetailBackTestComponent,
    ChiTietDuLieuBackTestDialogComponent,
  ],
  imports: [
    CommonModule,
    DiemVaXepHangTinDungRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ChiTietTieuChiChamDiemTinDungDialogComponent,
    UpdateTieuChiChamDiemTinDungDialogComponent,
    ChiTietDuLieuBackTestDialogComponent
  ]
})
export class DiemVaXepHangTinDungModule { }
