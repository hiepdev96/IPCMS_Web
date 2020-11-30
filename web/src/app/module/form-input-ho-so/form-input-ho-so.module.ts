import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputHoSoComponent } from './form-input-ho-so.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FormInputHoSoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FormInputHoSoComponent
  ]
})
export class FormInputHoSoModule { }
