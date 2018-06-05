import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { VistaPorDefectoComponent } from './vista-por-defecto/vista-por-defecto.component';
import { PostComponent } from './post/post.component';
import { LogginComponent } from './loggin/loggin.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaPorDefectoComponent,
    PostComponent,
    LogginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
