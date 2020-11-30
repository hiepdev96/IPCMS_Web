import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { E404Component } from './pages/e404/e404.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'ql-ho-so',
        loadChildren: () => import('./module/quan-ly-ho-so/quan-ly-ho-so.module').then(m => m.QuanLyHoSoModule)
      },
      {
        path: 'quan-tri-nguoi-dung',
        loadChildren: () => import('./module/quan-tri-nguoi-dung/quan-tri-nguoi-dung.module').then(m => m.QuanTriNguoiDungModule)
      },

    ]
  },
  { path: 'chi-tiet-ho-so', loadChildren: () => import('./module/chi-tiet-ho-so/chi-tiet-ho-so.module').then(m => m.ChiTietHoSoModule) },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
