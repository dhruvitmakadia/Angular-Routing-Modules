import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/apiservice/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employeeData: object;
  traineeData: object;
  flagBlack: boolean;
  flagWhite: boolean;

  constructor(private route: Router, private api: ApiService) {
    this.api.getAllEmployeeData().subscribe(data => {
      this.employeeData = data;
    });
    this.api.getAllTraineeData().subscribe(data => {
      this.traineeData = data;
    });
  }

  ngOnInit() {
    this.flagBlack = true;
    this.flagWhite = false;
  }
  doCheck() {
    if (this.flagBlack === true) {
      this.flagBlack = false;
      this.flagWhite = true;
    } else {
      this.flagBlack = true;
      this.flagWhite = false;
    }
  }
  goToEmployee() {
    this.route.navigate(['employee']);
  }

  goToTrainee() {
    this.route.navigate(['trainee']);
  }

}
