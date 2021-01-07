import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiTietHoSoRoutingModule } from './chi-tiet-ho-so-routing.module';
import { ChiTietHoSoComponent } from './chi-tiet-ho-so.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormInputHoSoModule } from '../form-input-ho-so/form-input-ho-so.module';
import { FileDinhKemDialogComponent } from './dialog/file-dinh-kem-dialog/file-dinh-kem-dialog.component';
import { ConfirmChotHoSoComponent } from './dialog/confirm-chot-ho-so/confirm-chot-ho-so.component';


@NgModule({
  declarations: [
    ChiTietHoSoComponent,
    FileDinhKemDialogComponent,
    ConfirmChotHoSoComponent
  ],
  imports: [
    CommonModule,
    ChiTietHoSoRoutingModule,
    SharedModule,
    FormInputHoSoModule
  ], exports: [
    ChiTietHoSoComponent
  ],
  entryComponents: [
    FileDinhKemDialogComponent,
    ConfirmChotHoSoComponent
  ]
})
export class ChiTietHoSoModule { }
