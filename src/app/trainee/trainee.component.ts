import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../core/apiservice/api.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss']
})
export class TraineeComponent implements OnInit {

  traineeData: object;
  trainee: object;
  flag: boolean;
  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.getAllTraineeData().subscribe(data => {
    //   this.traineeData = data;
    // });

    this.traineeData = this.api.getAllTraineeData();

    if (localStorage.getItem('usertype') === 'Admin') {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  viewMsg(event: number) {
    this.api.deleteTraineeData(event);
  }

  insertForm() {
    document.getElementById('myModal').style.display = 'block';
  }
}
