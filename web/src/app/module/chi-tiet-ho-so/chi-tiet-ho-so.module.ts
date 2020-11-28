import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiTietHoSoRoutingModule } from './chi-tiet-ho-so-routing.module';
import { ChiTietHoSoComponent } from './chi-tiet-ho-so.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ChiTietHoSoComponent],
  imports: [
    CommonModule,
    ChiTietHoSoRoutingModule,
    SharedModule
  ]
})
export class ChiTietHoSoModule { }
