import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { VistaPorDefectoComponent } from './vista-por-defecto/vista-por-defecto.component';
import { PostComponent } from './post/post.component';
import { LogginComponent } from './loggin/loggin.component';
import { PostService } from './Service/post.service';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'




import {routing} from './app.Routing';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaPorDefectoComponent,
    PostComponent,
    LogginComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    routing,
    FormsModule
  ],
  providers: [{provide: PostService, useClass: PostService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
