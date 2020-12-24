import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-bao-cao-theo-khu-vuc-dia-ly',
  templateUrl: './bao-cao-theo-khu-vuc-dia-ly.component.html',
  styleUrls: ['./bao-cao-theo-khu-vuc-dia-ly.component.scss']
})
export class BaoCaoTheoKhuVucDiaLyComponent implements OnInit {
  displayedColumns: string[] = ['postion', 'scope', 'count'];
  dataSource: MatTableDataSource<any>;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(datas);
  }
}
export const datas = [
  {
    scope: 'Hà Nội',
    count: '200',
  },
  {
    scope: 'Hải Phòng',
    count: '200',
  },
  {
    scope: 'Bắc Ninh',
    count: '200',
  },
  {
    scope: 'Bắc Giang',
    count: '200',
  },
  {
    scope: 'Hà Nam',
    count: '200',
  },
  {
    scope: 'Vĩnh Phúc',
    count: '200',
  },
  {
    scope: 'Lào Cai',
    count: '200',
  },
  {
    scope: 'Lạng Sơn',
    count: '200',
  },
  {
    scope: 'Thanh Hóa',
    count: '200',
  },
  {
    scope: 'Hải Dương',
    count: '200',
  },
  {
    scope: 'Nghệ AN',
    count: '200',
  },
  {
    scope: 'Cao Bằng',
    count: '200',
  },
  {
    scope: 'Bắc Cạn',
    count: '200',
  },
  {
    scope: 'Hà Tĩnh',
    count: '200',
  },
  {
    scope: 'TP Hồ Chí Minh',
    count: '200',
  },
  {
    scope: 'Quảng Bình',
    count: '200',
  }, {
    scope: 'Đà Nẵng',
    count: '200',
  },
  {
    scope: 'Bình Định',
    count: '200',
  }, {
    scope: 'Sóc Trăng',
    count: '200',
  },
  {
    scope: 'Nợ nhóm 5',
    count: '200',
  },
];
