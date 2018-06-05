import { Component, OnInit } from '@angular/core';
import {Post} from '../Model/post'
import { PostService } from '../Service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent implements OnInit {

  public listaPost: Post[];
  constructor(private postLista: PostService) {
    
   }

  ngOnInit() {
    this.listaPost = this.postLista.getPostList();
  }



}
