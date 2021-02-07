import { Injectable } from '@angular/core';
import { Repos } from './repos';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment' ;




@Injectable({
  providedIn: 'root'
})
export class UserService {

 private userName;
 private api = environment.apiKey;

  constructor(private http: HttpClient) { 
    this.userName = "abzed";
  }

  getProfileInfo(){
   return this.http.get<User>("https://api.github.com/users/" + this.userName + "?access_token=" + this.api)
  }

  getRepos(){
    return this.http.get<Repos>("https://api.github.com/users/" + this.userName + "/repos" + "?access_token=" + this.api)
  }

  updateInfo(userName:User){
    this.userName = userName;
  }
  

}
