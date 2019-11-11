import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersData: any;
  constructor( private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    // user data list
    this.homeService.getUsersData().subscribe( data => {
      this.usersData = data;
      console.log('>>>>>>>><<<<<<<<<<<<', this.usersData);
    });
  }
}
