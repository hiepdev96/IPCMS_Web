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


@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputDateComponent,
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
    NgxDaterangepickerMd
  ]
})
export class SharedModule { }
