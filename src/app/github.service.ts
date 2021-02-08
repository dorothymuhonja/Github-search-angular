import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';
import { Repos } from './repos';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username: string;

  constructor(private http: HttpClient) { 
    this.username = 'dorothymuhonja'
    console.log('Github service is ready');
    
  }
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username)
    .pipe(map(result =>result))
  }
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos')
    .pipe(map(result =>result))  
  }
  updateUser(username: string){
    this.username = username
  }
}
