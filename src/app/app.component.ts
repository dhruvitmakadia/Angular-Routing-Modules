import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing-Modules';
  showHead = false;
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/404' || event.url === '/login' || event.url === '/register' || event.url === '/') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
