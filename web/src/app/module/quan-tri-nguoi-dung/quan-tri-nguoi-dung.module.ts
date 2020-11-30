import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanTriNguoiDungRoutingModule } from './quan-tri-nguoi-dung-routing.module';
import { QuanTriNguoiDungComponent } from './quan-tri-nguoi-dung.component';
import { TaoNguoiDungComponent } from './tao-nguoi-dung/tao-nguoi-dung.component';
import { FormNguoiDungComponent } from './tao-nguoi-dung/form-nguoi-dung/form-nguoi-dung.component';


@NgModule({
  declarations: [QuanTriNguoiDungComponent, TaoNguoiDungComponent, FormNguoiDungComponent],
  imports: [
    CommonModule,
    QuanTriNguoiDungRoutingModule
  ]
})
export class QuanTriNguoiDungModule { }
