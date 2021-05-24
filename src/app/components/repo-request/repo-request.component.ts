import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/git-hub/user';
import { HomeComponent } from '../home/home.component';
import {GitRequestService} from '../../git-http/git-request.service'
import { Repository } from 'src/app/repository';


@Component({
  selector: 'app-repo-request',
  templateUrl: './repo-request.component.html',
  providers: [GitRequestService],
  styleUrls: ['./repo-request.component.css']
})
export class RepoRequestComponent implements OnInit {
  userName="";
  user:User;
  show=false;
  show1=false;
  repos=[];

  showUser(){
    this.show=true;
    this.userRequest.repoRequest(this.userName);
    this.user=this.userRequest.user;
  }


  showRepo(){
    this.show1=true;
    this.userRequest.repoRequest(this.userName);
    this.repos=this.userRequest.repos;
  }

  constructor(private userRequest:GitRequestService) { }

  ngOnInit(): void {
  }

}
