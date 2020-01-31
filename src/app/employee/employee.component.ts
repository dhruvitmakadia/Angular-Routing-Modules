import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/apiservice/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeData: object;
  employee: object;
  flag: boolean;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    // this.api.getAllEmployeeData().subscribe(data => {
    //   this.employeeData = data;
    // });
    this.employeeData = this.api.getAllEmployeeData();

    if (localStorage.getItem('usertype') === 'Admin') {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  viewMsg(event: number) {
    this.api.deleteEmployeeData(event);
  }

  insertForm() {
    document.getElementById('myModal').style.display = 'block';
  }
}
