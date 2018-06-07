import { Component, OnInit } from '@angular/core';
import { PostService } from '../Service/post.service';
import { post } from 'selenium-webdriver/http';
import { User } from '../Model/User';

@Component({
  selector: 'app-vista-por-defecto',
  templateUrl: './vista-por-defecto.component.html',
  styleUrls: ['./vista-por-defecto.component.css']
})
export class VistaPorDefectoComponent implements OnInit {

  public texto: string;
  public usuario: User;

  constructor(private postLista: PostService) {
    // this.usuario = postLista.user;
    
  }

  ngOnInit() {
    this.texto = "";
  }

  addPost(){
    this.postLista.crearPost(3,this.texto,"4");
  }


  isUsuarioLoged(): boolean{
    return this.postLista.user != null;
  }


  getUsuario(): User{
    return this.postLista.user; 
  }
  
}
