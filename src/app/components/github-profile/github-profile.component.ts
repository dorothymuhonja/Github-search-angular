import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import  { User } from '../../user';
import { Repos } from 'src/app/repos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
 userInfo:User;
  userName:User;
  repos:Repos;

  constructor(private userService: UserService, private http:HttpClient) {
  
   }

  searchUser(){
    this.userService.updateInfo(this.userName);
      let promise = new Promise((resolve, reject) => {
      this.userService.getProfileInfo().toPromise().then( response =>{
        this.userInfo = response.userInfo;
        console.log(response);
        
        this.userService.getRepos().toPromise().then( data => {
          this.repos = data;
          console.log(data);
          
        })
        
        
        resolve(response.userInfo)
      },
      error =>{
       alert("An error Occured. Please Wait!");
       
        reject(error)
  
      })
  
     })
     return promise
  }

  ngOnInit(){
    this.userService.getProfileInfo();
    
  }

}