import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/git-hub/user';
import { HomeComponent } from '../home/home.component';
import {GitRequestService} from '../../git-http/git-request.service'


@Component({
  selector: 'app-repo-request',
  templateUrl: './repo-request.component.html',
  providers: [GitRequestService],
  styleUrls: ['./repo-request.component.css']
})
export class RepoRequestComponent implements OnInit {
username = "";
user:User;
show = false;
repos = [];

  constructor() { }

  ngOnInit(): void {
  }

}
