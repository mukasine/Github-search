import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../user'


@Injectable()
export class UserRequestService {

    user:User;

  constructor(private http:HttpClient) { 
    this.user=new User("","");
  }

  quoteRequest(user){

    interface ApiResponse{
        avatar_url:string;
        name:string

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/users/"+ user.name+"?access_token="+environment.api_key).toPromise().then(response=>{
            
            this.user.user=response.avatar_url
            this.user.author=response.name

            resolve()
        },
        error=>{
                this.user.user="Never, never, never give up."
                this.user.author="winston churchill"
                reject(error)
            }
        )
    })

    return promise
  }
}