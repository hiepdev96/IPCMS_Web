import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { NavComponent } from './main/nav/nav.component';
import { FooterComponent } from './main/footer/footer.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { E404Component } from './pages/e404/e404.component';
import { E500Component } from './pages/e500/e500.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { FormInputHoSoModule } from './module/form-input-ho-so/form-input-ho-so.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmMessageDialogComponent } from 'src/app/shared/dialogs/confirm-message-dialog/confirm-message-dialog.component';
import { MaterialModule } from './shared/material/material.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import { ErrorsHandler } from './common/interceptors/errors-handler';

const APP_COMPONENT = [
  MainComponent,
  HeaderComponent,
  NavComponent,
  FooterComponent,
  DashboardComponent,
  E404Component,
  E500Component,
  LoginComponent,
  ConfirmMessageDialogComponent
];
export const DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENT,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormInputHoSoModule,
    MatDialogModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_LOCALE, useValue: 'vi' },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    ErrorsHandler
  ],
  entryComponents: [
    ConfirmMessageDialogComponent,
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


