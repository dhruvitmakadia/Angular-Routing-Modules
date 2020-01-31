import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private route: Router, private location: Location) { }

  ngOnInit() {
  }

  goToHome() {
    this.route.navigate(['dashboard']);
  }
  goBack() {
    this.location.back();
  }
}
