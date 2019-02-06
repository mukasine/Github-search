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
  name = ""
  olalala = "ok"
username:User;
repos: any
check(){  
  // alert(this.name)
  interface ApiResponse{
    public_repos:number;
    public_gists:number;
    followers:number;
    following:number;
    created_at:Date;
    html_url:string;
}
this.http.get<ApiResponse>("https://api.github.com/users/"+this.name+"?access_token=cf21e35aafb9604f2e7c6a216819c23ea7414a3d").subscribe((Data:any)=>{
  this.repos.public_repos=Data.public_repos;
  this.repos.public_gists=Data.public_gists;
this.repos.followers=Data.followers;
this.repos.following=Data.following; 
this.repos.created_at=Data.created_at;
this.repos.html_url=Data.html_url;
console.log(Data.html_url)
})

  

}
constructor( private http:HttpClient) {this.repos=new Repository(0,0,0,0,new Date(),"")}
  ngOnInit() {
  }

}
