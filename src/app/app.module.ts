import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VistaPorDefectoComponent } from './vista-por-defecto/vista-por-defecto.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaPorDefectoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
