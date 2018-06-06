import { Component, OnInit } from '@angular/core';
import { PostService } from '../Service/post.service';
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})

export class TagComponent implements OnInit {

  public id: number;
  public name: string;

  constructor(private postLista: PostService) {
    
   }


  ngOnInit() {
  }

  


}
