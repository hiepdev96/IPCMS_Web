import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyHoSoRoutingModule } from './quan-ly-ho-so-routing.module';
import { TaoHoSoComponent } from './tao-ho-so/tao-ho-so.component';
import { ImportHoSoComponent } from './import-ho-so/import-ho-so.component';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';


@NgModule({
  declarations: [
    TaoHoSoComponent,
    ImportHoSoComponent,
    DanhSachHoSoComponent
  ],
  imports: [
    CommonModule,
    QuanLyHoSoRoutingModule
  ]
})
export class QuanLyHoSoModule { }
