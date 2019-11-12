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
  userDetails: any;
  editUser: boolean;


  users:any;

  constructor( private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    // user data list
    this.homeService.getUsersData().subscribe( data => {
      this.usersData = data;
      console.log('>>>>>>>><<<<<<<<<<<<', this.usersData);
    });
  }

  editUserData(UserId) {
    this.userDetails = UserId;
    this.editUser = true;
    // console.log('>>>>>>>><<<<<<<<<<<<dcasd', this.userDetails);
  }

  // delete data
  deleteData(data) {
    console.log('delete data', data.id);
   
    this.homeService.deleteUserData(data.id)
    .subscribe( data => {
      this.users = data;
      console.log('delete data sdcfsdfsdf', this.users);
    })



    



  }
}
