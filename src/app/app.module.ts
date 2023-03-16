import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Blog3Component } from './blog3/blog3.component';
import { Blog4Component } from './blog4/blog4.component';
import { Blog5Component } from './blog5/blog5.component';

@NgModule({
  declarations: [
    AppComponent,
    Blog1Component,
    Blog2Component,
    HomeComponent,
    ContactUsComponent,
    Blog3Component,
    Blog4Component,
    Blog5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
