import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyHoSoRoutingModule } from './quan-ly-ho-so-routing.module';
import { TaoHoSoComponent } from './tao-ho-so/tao-ho-so.component';
import { ImportHoSoComponent } from './tao-ho-so/import-ho-so/import-ho-so.component';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
import { FormTaoHoSoComponent } from './tao-ho-so/form-tao-ho-so/form-tao-ho-so.component';
import {MatTabsModule} from '@angular/material/tabs';

const MATERIAL_MODULE = [
  MatTabsModule
];

@NgModule({
  declarations: [
    TaoHoSoComponent,
    ImportHoSoComponent,
    DanhSachHoSoComponent,
    FormTaoHoSoComponent
  ],
  imports: [
    CommonModule,
    QuanLyHoSoRoutingModule,
    ...MATERIAL_MODULE
  ]
})
export class QuanLyHoSoModule { }
