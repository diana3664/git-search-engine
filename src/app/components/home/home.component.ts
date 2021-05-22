import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/git-hub/user';
import {GitRequestService} from '../../git-http/git-request.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user:User;

constructor(private userRequest:GitRequestService){}
  

  ngOnInit() {
    this.userRequest.userRequest();
    this.user = this.userRequest.user

}
}
