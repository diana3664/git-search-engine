import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RepoRequestComponent } from './components/repo-request/repo-request.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'repo-request', component: RepoRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
