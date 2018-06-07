import { Component, OnInit } from '@angular/core';
import { Post } from '../Model/post'
import { PostService } from '../Service/post.service';
import { Tag } from '../Model/Tag';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public listaPost: Post[];
  public listaTag: Tag[];

  constructor(private postLista: PostService) {

  }

  ngOnInit() {
    this.listaPost = this.postLista.getPostList();
  }

  cogerListaPostTag(id: number) {
    this.listaPost = this.postLista.getPostTagList(id);
  }

  trituraPost(id: number) {
    this.postLista.borrarPost(id);
    // this.listaPost = this.postLista.getPostList();

  }



  canRemove(id: number): boolean {
    console.log(this.postLista.getUserId());
    if (this.postLista.user == null) {
      return false;
    } else {
      console.log(this.postLista.getUserId());

      return id == this.postLista.getUserId();
    }

  }

}
