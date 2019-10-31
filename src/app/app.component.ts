import { Component, HostListener, OnInit } from '@angular/core';
import 'hammerjs';
import data from './data/data-set';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'present-me';
  dataSet = [];
  currentTalk = {};
  SWIPE_ACTION = { LFET: 'swipeLeft', RIGHT: 'swipeRight' };

  ngOnInit() {
    this.dataSet = data;
    this.generateTalk();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      this.generateTalk();
    }
  }

  swipe() {
    this.generateTalk();
  }

  generateTalk() {
    this.currentTalk = this.dataSet[Math.floor(Math.random() * this.dataSet.length)];
  }
}
