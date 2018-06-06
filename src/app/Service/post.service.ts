import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../Model/post'
import { User } from '../Model/User';
import { Tag } from '../Model/Tag'
import { Type } from '@angular/compiler/src/output/output_ast';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPostList(): Post[] {
    let postList: Post[] = [];
    this.http.get('http://192.168.2.108:8080/OMNI-BACK-END/services/post/get').subscribe(data => {
      // alert("Hola que tal");
      let list: any = data;
      //alert("Hola que tal");
      //console.log(data);
      list.forEach(post => {
        let jsonTag: any = post['tags'];
        let tagList: Tag[] = [];
        jsonTag.forEach(tag => {
          tagList.push(new Tag(tag['id'], tag['name']));
        });
        let jsonUser: any = post['user'];
        // alert(jsonUser['id']);
        let user: User = new User(jsonUser['id'], "", "", jsonUser['name'], jsonUser['surname'], "", "", jsonUser['image'], jsonUser['registrationMoment']);
        postList.push(new Post(post['id'], post['creationDate'], post['edited'], post['editionDate'], post['text'], tagList, user));
      });
      console.log(postList);
    });
    return postList;
  }


  getTag(num : number): Tag[] {
    let tagList: Tag[] = [];
    this.http.get('http://192.168.2.108:8080/OMNI-BACK-END/services/tag/pop/'+num).subscribe(data => {
      // alert("Hola que tal");
      let list: any = data;
      // alert("Hola que tal");
      list.forEach(tag => {
        tagList.push(new Tag(tag['id'], tag['name']));
        // alert(jsonUser['id']);
      });
    });
    return tagList;
  }



  getPostTagList(tagId: number): Post[] {
    let postList: Post[] = [];
    this.http.get('http://192.168.2.108:8080/OMNI-BACK-END/services/post/tag/'+tagId).subscribe(data => {
      // alert("Hola que tal");
      let list: any = data;
      //alert("Hola que tal");
      //console.log(data);
      list.forEach(post => {
        let jsonTag: any = post['tags'];
        let tagList: Tag[] = [];
        jsonTag.forEach(tag => {
          tagList.push(new Tag(tag['id'], tag['name']));
        });
        let jsonUser: any = post['user'];
        // alert(jsonUser['id']);
        let user: User = new User(jsonUser['id'], "", "", jsonUser['name'], jsonUser['surname'], "", "",
         jsonUser['image'], jsonUser['registrationMoment']);
        postList.push(new Post(post['id'], post['creationDate'], post['edited'], post['editionDate'], post['text'], tagList, user));
      });
      console.log(postList);
    });
    return postList;
  }


  // crearPost(id: number, texto: string, tag: string){
  //   let param = {
  //     userId: id,
  //     text: texto,
  //     tagIds: tag
  //   }
    
  //   this.http.post('http://192.168.2.108:8080/OMNI-BACK-END/services/post/add',param, {headers: new Headers({'Content-Type':'application/x-www-form-urlencode'})}).subscribe(data => {
  //     if(data == "post.commit.ok"){
  //       alert("superSaiyan")
  //     }else{
  //       alert("SuperSaiyan triste")
  //     }
  //   });
  // }


}
