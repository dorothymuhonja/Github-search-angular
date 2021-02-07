import { Component, OnInit, Output } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';
import  { User } from '../../user';
import 'rxjs/add/operator/map';
import { Repos } from 'src/app/repos';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
 userInfo:User;
  userName:User;
  repos:Repos;

  constructor(private userService: UserService) {
  
   }

  searchUser(){
    this.userService.updateInfo(this.userName);
      let promise = new Promise((resolve, reject) => {
      this.userService.getProfileInfo().toPromise().then( response =>{
        this.userInfo = response;
        console.log(response);
        
        this.userService.getRepos().toPromise().then( data => {
          this.repos = data;
          console.log(data);
          
        })
        
        
        resolve(this.repos)
      },
      error =>{
       alert("An error Occured. Please Wait!");
       
        reject(error)
  
      })
  
     })
  }

  ngOnInit(){}

}