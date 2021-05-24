import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RepoRequestComponent } from './components/repo-request/repo-request.component';
import { FormsModule } from '@angular/forms';

RepoRequestComponent


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
