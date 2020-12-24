import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bao-cao-nguoi-dung-theo-trang-thai',
  templateUrl: './bao-cao-nguoi-dung-theo-trang-thai.component.html',
  styleUrls: ['./bao-cao-nguoi-dung-theo-trang-thai.component.scss']
})
export class BaoCaoNguoiDungTheoTrangThaiComponent implements OnInit {
  displayedColumns = ['status', 'count'];
  dataSource: MatTableDataSource<any>;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(datas);
  }


}
export const datas = [
  {
    status: 'Đang hoạt động',
    count: '200',
  },
  {
    status: 'Đã tạm ngừng',
    count: '200',
  },
  {
    status: 'Đã xóa',
    count: '200',
  }
];
