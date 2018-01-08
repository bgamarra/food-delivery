import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdministrationModule } from './modules/administration/administration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
