import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChiTietHoSoComponent } from './chi-tiet-ho-so.component';

const routes: Routes = [{ path: '', component: ChiTietHoSoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChiTietHoSoRoutingModule { }
