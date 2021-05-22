import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'
import { User } from '../git-hub/user';

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {

user: User;


constructor(private http: HttpClient) { 
  this.user = new User(0,"","",0,0,0)
}

userRequest(){
  interface ApiResponse{
    id : number;
    name : string;
    picture : string;
    followers : number;
    following : number;
    repositories : number;

  }
  let promise = new Promise ((resolve, reject) => {
    this.http.get<ApiResponse>(environment.apiUrla).toPromise().then(response=>{
      this.user.name = response.name
      this.user.picture = response.picture
      this.user.followers = response.followers
      this.user.following = response.following
      this.user.repositories = response.repositories

     resolve(response);

    },error=>{
      reject(error);
    
    })
  })
  return promise;
}
}
