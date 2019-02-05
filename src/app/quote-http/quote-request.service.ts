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

  quoteRequest(){

    interface ApiResponse{
        user:string;
        author:string

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
            
            this.user.user=response.user
            this.user.author=response.author

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