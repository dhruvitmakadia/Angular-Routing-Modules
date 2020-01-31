import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    const hourHand = document.querySelector('.hourHand') as HTMLElement;
    const minuteHand = document.querySelector('.minuteHand') as HTMLElement;
    const secondHand = document.querySelector('.secondHand') as HTMLElement;
    const time = document.querySelector('.time');

    function setDate() {
      const today = new Date();

      const second = today.getSeconds();
      const secondDeg = ((second / 60) * 360) + 360;
      secondHand.style.transform = `rotate(${secondDeg}deg)`;

      const minute = today.getMinutes();
      const minuteDeg = ((minute / 60) * 360);
      minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

      const hour = today.getHours();
      const hourDeg = ((hour / 12) * 360);
      hourHand.style.transform = `rotate(${hourDeg}deg)`;

      time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second + '</small>' + '</span>';
    }
    setInterval(setDate, 1000);
  }

}
