import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../Model/post'
import { User } from '../Model/User';
import { Tag } from '../Model/Tag'


@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPostList(): Post[] {
    let postList: Post[] = [];
    this.http.get('http://192.168.2.108:8080/OMNI-BACK-END/services/post/get').subscribe(data => {
      // alert("Hola que tal");
      let list: any = data;
      // alert("Hola que tal");
      list.forEach(post => {
        let jsonTag: any[] = post['tag'];
        let tagList: Tag[] = [];
        list.forEach(tag => {
          tagList.push(new Tag(tag['id'], tag['name']));
        });
        let jsonUser: any = post['user'];
        // alert(jsonUser['id']);
        let user: User = new User(jsonUser['id'], "", "", jsonUser['name'], jsonUser['surname'], "", "",
         jsonUser['image'], jsonUser['registrationMoment']);
        postList.push(new Post(post['id'], post['creationDate'], post['edited'], post['editionDate'], post['text'], tagList, user));
      });
    });
    return postList;
  }


}
