import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { VistaPorDefectoComponent } from './vista-por-defecto/vista-por-defecto.component';
import { PostComponent } from './post/post.component';
import { LogginComponent } from './loggin/loggin.component';
import { PostService } from './Service/post.service';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    VistaPorDefectoComponent,
    PostComponent,
    LogginComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule    
  ],
  providers: [{provide: PostService, useClass: PostService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
