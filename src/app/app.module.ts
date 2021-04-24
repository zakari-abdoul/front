import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screen/home/home.component';
import { PaysComponent } from './screen/pays/pays.component';
import { DetaillerComponent } from './screen/detailler/detailler.component';
import { ServicesUtils } from './core/app.service.utils';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaysComponent,
    DetaillerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [HttpClientModule,
    { provide: ServicesUtils, useValue: undefined },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
