import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyHoSoRoutingModule } from './quan-ly-ho-so-routing.module';
import { TaoHoSoComponent } from './tao-ho-so/tao-ho-so.component';
import { ImportHoSoComponent } from './tao-ho-so/import-ho-so/import-ho-so.component';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
import { FormTaoHoSoComponent } from './tao-ho-so/form-tao-ho-so/form-tao-ho-so.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

const MATERIAL_MODULE = [
  MatFormFieldModule,
  MatTabsModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule
];

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
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULE
  ]
})
export class QuanLyHoSoModule { }
