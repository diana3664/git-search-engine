import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/git-hub/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient) { 
    this.user = new User(0,"","",0,0,0)
  }

  ngOnInit() {

    interface ApiResponse{
      id : number;
      name : string;
      picture : string;
      followers : number;
      following : number;
      repositories : number;

    }

    this.http.get<ApiResponse>("https://api.github.com/users/diana3664").subscribe(data => {

    this.user = new User (data.id , data.name,data.picture,data.followers,data.following,data.repositories)
    })
  }

}
