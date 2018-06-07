import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PostService } from '../Service/post.service';
// import { PassThrough } from 'stream';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private postLista: PostService ) {
    this.buildForm();
   }

   buildForm() {
    this.loginForm = this.fb.group({
      email: [ ],
      password: [],
    });
  }
  ngOnInit() {
  }

  // submit() {
  //   const email = this.loginForm.get('email').value;
  //   const password = this.loginForm.get('password').value;
  // }

  logueo(){
    this.postLista.loggin(this.email, this.password);
    
  }


}
