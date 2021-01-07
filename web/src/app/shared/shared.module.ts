import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextComponent } from './controls/input-text/input-text.component';
import { InputNumberComponent } from './controls/input-number/input-number.component';
import { InputSelectComponent } from './controls/select/input-select.component';
import { InputDateComponent } from './controls/input-date/input-date.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { InputFromToDateComponent } from './controls/input-from-to-date/input-from-to-date.component';
import { TinhThanhCtrlComponent } from './controls/tinh-thanh-ctrl/tinh-thanh-ctrl.component';
import { QuanHuyenCtrlComponent } from './controls/quan-huyen-ctrl/quan-huyen-ctrl.component';
import { PhuongXaCtrlComponent } from './controls/phuong-xa-ctrl/phuong-xa-ctrl.component';


@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputDateComponent,
    InputFromToDateComponent,
    TinhThanhCtrlComponent,
    QuanHuyenCtrlComponent,
    PhuongXaCtrlComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxDaterangepickerMd.forRoot(),

  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    InputTextComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputDateComponent,
    NgxDaterangepickerMd,
    InputFromToDateComponent,
    TinhThanhCtrlComponent,
    QuanHuyenCtrlComponent,
    PhuongXaCtrlComponent,
  ],
})
export class SharedModule { }
