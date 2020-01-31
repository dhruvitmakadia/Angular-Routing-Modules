import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  flag: boolean;
  constructor(private route: Router) { }

  @Input() dataObject: object;
  @Output() sendMsg = new EventEmitter<number>();
  ngOnInit() {
    if (localStorage.getItem('usertype') === 'Admin') {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }


  delete(id: number) {
    if (confirm('Are You Sure To Delete This Record?')) {
      this.sendMsg.emit(id);
    }
  }
  edit(data: number) {
    this.route.navigate([`${this.route.url}/${data}`]);
    document.getElementById('myModal').style.display = 'block';
  }
}
