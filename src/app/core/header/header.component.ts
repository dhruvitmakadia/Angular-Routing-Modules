import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  flag: boolean;
  dropdown: boolean;
  username: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.flag = false;
    this.dropdown = false;
    this.username = localStorage.getItem('username');
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  openCloseNav() {
    if (this.flag === true) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      this.flag = false;
    } else {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
      this.flag = true;
    }
  }
  viewDropdown() {
    if (this.dropdown === true) {
      this.dropdown = false;
    } else {
      this.dropdown = true;
    }
  }
  setting() {
    this.router.navigate(['setting']);
  }
  changePassword() {
    this.router.navigate(['changepassword']);
  }
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('usertype');
    localStorage.removeItem('token');
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    this.router.navigate(['login']);
  }
}
