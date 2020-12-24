import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hang-tin-dung',
  templateUrl: './hang-tin-dung.component.html',
  styleUrls: ['./hang-tin-dung.component.scss']
})
export class HangTinDungComponent implements OnInit {

  datas = datas;
  constructor() { }

  ngOnInit(): void {
  }

}
export const datas = [
  {
    name: 'AAA',
    from_value: 2000,
    to_value: 2000
  },
  {
    name: 'AA',
    from_value: 2000,
    to_value: 2000
  },
  {
    name: 'A',
    from_value: 2000,
    to_value: 2000
  },
  {
    name: 'B',
    from_value: 2000,
    to_value: 2000
  },
  {
    name: 'C',
    from_value: 2000,
    to_value: 2000
  },
  {
    name: 'D',
    from_value: 2000,
    to_value: 2000
  }
];

