import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  openModel() {
    document.getElementById('myModal').style.display = 'block';
  }
  closeModel() {
    this.location.back();
    document.getElementById('myModal').style.display = 'none';

  }
}
