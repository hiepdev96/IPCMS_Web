import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyHoSoRoutingModule } from './quan-ly-ho-so-routing.module';
import { TaoHoSoComponent } from './tao-ho-so/tao-ho-so.component';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
import { SharedModule } from './../../shared/shared.module';
import { FormInputHoSoModule } from '../form-input-ho-so/form-input-ho-so.module';

@NgModule({
  declarations: [
    TaoHoSoComponent,
    DanhSachHoSoComponent,
  ],
  imports: [
    CommonModule,
    QuanLyHoSoRoutingModule,
    SharedModule,
    FormInputHoSoModule
  ]
})
export class QuanLyHoSoModule { }
