import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { NgProgressModule } from '@ngx-progressbar/core';
import { RepoRequestComponent } from './components/repo-request/repo-request.component';
import { FormsModule } from '@angular/forms';
import { ReposComponent } from './components/repos/repos.component';

RepoRequestComponent


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoRequestComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
