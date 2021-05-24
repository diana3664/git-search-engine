import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/git-hub/user';
import { Repository } from 'src/app/repository';
import {GitRequestService} from '../../git-http/git-request.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [GitRequestService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user:User;
repos =[];
repositories =[];


show = false;
constructor(private userRequest:GitRequestService, private http: HttpClient){}
showRepo(){
  this.show = true;
}  



  ngOnInit() {
    this.userRequest.userRequest("diana3664");
    this.user = this.userRequest.user;

    this.userRequest.repoRequest("diana3664");
    this.repos=this.userRequest.repos;

}
}
