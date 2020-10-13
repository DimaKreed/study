import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './components/home-page/home-page.component';
import {BarCodesListComponent} from "./components/bar-codes-list/bar-codes-list.component";
import {AddBarCodeComponent} from "./components/add-bar-code/add-bar-code.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HomePageComponent,
    BarCodesListComponent,
    AddBarCodeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
