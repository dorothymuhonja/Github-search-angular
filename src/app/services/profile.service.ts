import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 private userName;
 private api = environment.apiKey


  constructor(private http: HttpClient) {
    this.userName = "Dorothy";
   }
   getUser() {
     return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + this.api);
   }

   getRepo() {
     return this.http.get("https://api.github.com/users/" + this.userName + "/repos" + "?access_token=" + this.api)
   }
}
