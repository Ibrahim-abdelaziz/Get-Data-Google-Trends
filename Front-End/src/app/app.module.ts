import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleTrendsComponent } from './google-trends/google-trends.component';
import { GoogleApisService } from './google-apis.service';
import { HttpClientModule } from '@angular/common/http';
import { GoogleTrendsDateComponent } from './google-trends-date/google-trends-date.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleTrendsComponent,
    GoogleTrendsDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GoogleApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
