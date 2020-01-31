import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-breadcruam',
  templateUrl: './breadcruam.component.html',
  styleUrls: ['./breadcruam.component.scss']
})
export class BreadcruamComponent implements OnInit {
  showHead: boolean;

  constructor(private router: Router) {
    router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
      if (event.url === '/login' || event.url === '/register' || event.url === '/404' || event.url === '/') {
        this.showHead = false;
      } else {
        this.showHead = true;
      }
    }
  }); }

  ngOnInit() {
  }

}
