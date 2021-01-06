import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lich-su-hoat-dong',
  templateUrl: './lich-su-hoat-dong.component.html',
  styleUrls: ['./lich-su-hoat-dong.component.scss']
})
export class LichSuHoatDongComponent implements OnInit {

  scrollDistance = 1;
  scrollUpDistance = 2;
  throttle = 300;
  lst = [];
  constructor() {
    for (let index = 0; index < 200; index++) {
      this.lst.push(index);
    }
  }

  ngOnInit(): void {
  }
  onScrollDown(): void {
  }
}
