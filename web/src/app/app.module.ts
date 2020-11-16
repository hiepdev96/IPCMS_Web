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

const APP_COMPONENT = [
  MainComponent,
  HeaderComponent,
  NavComponent,
  FooterComponent,
  DashboardComponent,
  E404Component,
  E500Component,
  LoginComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENT,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
