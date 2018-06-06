import { Component, OnInit } from '@angular/core';
import { PostService } from '../Service/post.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-vista-por-defecto',
  templateUrl: './vista-por-defecto.component.html',
  styleUrls: ['./vista-por-defecto.component.css']
})
export class VistaPorDefectoComponent implements OnInit {

  public texto: string;

  constructor(private postLista: PostService) {
    
  }

  ngOnInit() {
    this.texto = "";
  }

  addPost(){
    this.postLista.crearPost(3,this.texto,"2");
  }

  
}
