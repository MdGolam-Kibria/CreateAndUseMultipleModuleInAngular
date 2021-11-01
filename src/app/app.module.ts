import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FastModuleModule} from "./fast-module/fast-module.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FastModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
