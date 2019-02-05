import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// import { link } from 'fs';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

// import {enviromnent} from '../enviromnents/enviromnent';
@Component({
  selector: 'app-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class FormComponent implements OnInit {
  olalala = "ok"
username:User;
repos: any
check(){  
  interface ApiResponse{
    public_repos:number;
    public_gists:number;
    followers:number;
    following:number;
    created_at:Date;
    html_url:string;
}
this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token= "+ environment.api_key).subscribe((Data:any)=>{
  this.repos.public_repos=Data.repos.public_repos;
  this.repos.public_gists=Data.public_gists;
this.repos.followers=Data.followers;
this.repos.following=Data.following; 
this.repos.created_at=Data.created_at;
this.repos.html_Url=Data.html_Url;
})

  

}
constructor( private http:HttpClient) {this.repos=new Repository()}
  ngOnInit() {
  }

}
