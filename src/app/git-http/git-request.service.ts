import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'
import { User } from '../git-hub/user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {

user: User;
repos=[];
repositories=[];

// repositories = [];


constructor(private http: HttpClient) { 
  this.user = new User(0,"","",0,0,0);

}

userRequest(username:string){
  interface ApiResponse{
    id : number;
    name : string;
    // picture : string;
    followers : number;
    following : number;
    repositories : number;

  }
  let promise = new Promise ((resolve, reject) => {
    this.http.get<ApiResponse>(environment.apiUrl2a+username).toPromise().then(response=>{
      this.user.id++;
      this.user.name = response.name;
      // this.user.picture = response.picture
      this.user.followers = response.followers;
      this.user.following = response.following;
      this.user.repositories = response.repositories

     resolve(response);

    },error=>{
      reject(error);
    
    })
  })
  return promise;
}

 

repoRequest(username:string){

  interface ApiResponse2{
    RepoName: string;
    language: number;
    // picture : string;
    fork: number

  }
  let promise = new Promise ((resolve, reject) => {
    this.http.get<ApiResponse2>(environment.apiUrl2a+username).toPromise().then(response=>{
      for (let i=0; i< response["length"];i++){
        let newRepo = new Repository("",0,0);
        newRepo = response[i].RepoName;
        newRepo.language = response[i].language;
        newRepo.fork = response[i].fork;
        this.repos.push(newRepo);

      }
     resolve(response);

    },error=>{
      reject(error);
    
    })
  })
  return promise;
}
}
