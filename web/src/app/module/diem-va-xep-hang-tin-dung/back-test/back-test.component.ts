import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-test',
  templateUrl: './back-test.component.html',
  styleUrls: ['./back-test.component.scss']
})
export class BackTestComponent implements OnInit {
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
