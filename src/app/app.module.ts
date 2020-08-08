import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextComponent } from './next/next.component';
import { HttpClientModule } from '@angular/common/http';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    NextComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
