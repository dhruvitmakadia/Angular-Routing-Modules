import { Injectable } from '@angular/core';
import { ApiService } from '../apiservice/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  employeeData: any;
  traineeData: any;
  flag: boolean;
  constructor(private api: ApiService) {

  }

  run() {
    console.log('Loading. . .');
    this.api.getAllEmployeeData().subscribe(data => {
      this.employeeData = data;
    });
    this.api.getAllTraineeData().subscribe(data => {
      this.traineeData = data;
    });
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  isAuthenticated() {

    this.flag = false;
    for (const empData of this.employeeData) {
      if (empData.name === localStorage.getItem('username') && empData.password === localStorage.getItem('password')) {
        localStorage.setItem('usertype', 'Admin');
        localStorage.setItem('uid', empData.id);
        this.flag = true;
      }
    }
    for (const trnData of this.traineeData) {
      if (trnData.name === localStorage.getItem('username') && trnData.password === localStorage.getItem('password')) {
        localStorage.setItem('usertype', 'User');
        localStorage.setItem('uid', trnData.id);
        this.flag = true;
      }
    }
    return this.flag;
  }
}
