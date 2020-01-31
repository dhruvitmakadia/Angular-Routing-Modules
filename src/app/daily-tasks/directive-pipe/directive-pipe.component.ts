import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-pipe',
  templateUrl: './directive-pipe.component.html',
  styleUrls: ['./directive-pipe.component.scss']
})
export class DirectivePipeComponent implements OnInit {
  flagBlack: boolean;
  flagWhite: boolean;
  showDirec: boolean;
  showPipe: boolean;
  num: number;

  constructor() {
    this.flagBlack = true;
    this.flagWhite = false;
    this.showDirec = false;
    this.showPipe = false;
  }

  ngOnInit() {

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

  viewDirective() {
    this.showDirec = true;
    this.showPipe = false;
  }

  viewPipe() {
    this.showPipe = true;
    this.showDirec = false;
  }
}
