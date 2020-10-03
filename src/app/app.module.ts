import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerTableComponent } from './server-table/server-table.component';
import {HttpClientModule} from '@angular/common/http';
import { PrintServerDetailsComponent } from './print-server-details/print-server-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerTableComponent,
    PrintServerDetailsComponent
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
