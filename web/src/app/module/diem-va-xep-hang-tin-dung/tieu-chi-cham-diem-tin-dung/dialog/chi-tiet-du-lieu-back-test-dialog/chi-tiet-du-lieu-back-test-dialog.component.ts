import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-du-lieu-back-test-dialog',
  templateUrl: './chi-tiet-du-lieu-back-test-dialog.component.html',
  styleUrls: ['./chi-tiet-du-lieu-back-test-dialog.component.scss']
})
export class ChiTietDuLieuBackTestDialogComponent implements OnInit {

  datas = datas;
  isShowDetail: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
export const datas = [
  {
    name: 'AAA',
    percent: 10,
  },
  {
    name: 'AA',
    percent: 20,
  },
  {
    name: 'A',
    percent: 30,
  },
  {
    name: 'B',
    percent: 40,
  },
  {
    name: 'C',
    percent: 15,
  },
  {
    name: 'D',
    percent: 16,
  }
];
