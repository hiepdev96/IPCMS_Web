import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bao-cao-lich-su-nguoi-dung',
  templateUrl: './bao-cao-lich-su-nguoi-dung.component.html',
  styleUrls: ['./bao-cao-lich-su-nguoi-dung.component.scss']
})
export class BaoCaoLichSuNguoiDungComponent implements OnInit {
  lstAction = LST_ACTION;
  displayedColumns: string[] = ['postion', 'ngayBaoCao', 'user_id', 'value'];
  dataSource: MatTableDataSource<any>;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(datas);
  }

}
export const LST_ACTION = [
  'Tạo hồ sơ',
  'Hoàn thiện hồ sơ',
  'Thẩm định hồ sơ',
  'Chốt hồ sơ',
  'Phê duyệt hồ sơ'
];

export const datas = [
  {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }
  , {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }, {
    ngayBaoCao: '20/10/2020',
    user_id: 'ajkc3434laooavltg',
    value: '3'
  }
];
