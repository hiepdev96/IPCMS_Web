import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyHoSoRoutingModule } from './quan-ly-ho-so-routing.module';
import { TaoHoSoComponent } from './tao-ho-so/tao-ho-so.component';
import { ImportHoSoComponent } from './tao-ho-so/import-ho-so/import-ho-so.component';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
import { FormTaoHoSoComponent } from './tao-ho-so/form-tao-ho-so/form-tao-ho-so.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    TaoHoSoComponent,
    ImportHoSoComponent,
    DanhSachHoSoComponent,
    FormTaoHoSoComponent,
  ],
  imports: [
    CommonModule,
    QuanLyHoSoRoutingModule,
    SharedModule
  ]
})
export class QuanLyHoSoModule { }
