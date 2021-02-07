import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';
import  { User } from '../../user';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
