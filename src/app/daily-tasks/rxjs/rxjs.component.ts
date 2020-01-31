import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  data: string;
  constructor() { }

  ngOnInit() {
  }

  showSubject() {
    this.data = 'Open Console To See Subject Output.';
    const subject = new Subject<number>();
    subject.next(1);
    subject.next(2);
    subject.subscribe(data => {
      console.log('Observer 1 : ', data);
    });
    subject.next(3);
    subject.next(4);
    subject.subscribe(data => {
      console.log('Observer 2 : ', data);
    });
    subject.next(5);
    subject.next(6);
  }
  showBehaviorSubject() {
    this.data = 'Open Console To See Behavior Subject Output.';
    const subject = new BehaviorSubject(0);
    subject.next(1);
    subject.next(2);
    subject.subscribe(data => {
      console.log('Observer 1 : ', data);
    });
    subject.next(3);
    subject.next(4);
    subject.subscribe(data => {
      console.log('Observer 2 : ', data);
    });
    subject.next(5);
    subject.next(6);
  }
}
