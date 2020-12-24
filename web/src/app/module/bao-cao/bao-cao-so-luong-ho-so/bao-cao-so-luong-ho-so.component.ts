import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-bao-cao-so-luong-ho-so',
  templateUrl: './bao-cao-so-luong-ho-so.component.html',
  styleUrls: ['./bao-cao-so-luong-ho-so.component.scss'],
})
export class BaoCaoSoLuongHoSoComponent implements OnInit {
  myForm = new FormGroup({
    loaiBaoCaoCtrl: new FormControl(),
    datePickerCtrl: new FormControl(),
  });
  lstLoaiBaoCao = LST_LOAI_BAO_CAO;
  displayedColumns: string[] = ['postion', 'status', 'count'];
  dataSource: MatTableDataSource<any>;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(datas);
  }
}
export const LST_LOAI_BAO_CAO = [
  'Số lượng hồ sơ theo loại khách hàng',
  'Số lượng hồ sơ theo hạng tín dụng',
  'Số lượng hồ sơ theo loại khoản vay',
  'Số lượng hồ sơ theo sản phẩm cho vay',
  'Số lượng hồ sơ theo kỳ hạn',
  'Số lượng hồ sơ theo hình thức cho vay',
  'Số lượng hồ sơ theo độ tuổi',
];
export const datas = [
  {
    status: 'Mới',
    count: '200',
  },
  {
    status: 'Đang telesale',
    count: '200',
  },
  {
    status: 'Đã chốt',
    count: '200',
  },
  {
    status: 'Hủy',
    count: '200',
  },
  {
    status: 'Đang hoàn thiện',
    count: '200',
  },
  {
    status: 'Đã hoàn thiện',
    count: '200',
  },
  {
    status: 'Lưu trữ',
    count: '200',
  },
  {
    status: 'Đã phê duyệt hoàn thiện',
    count: '200',
  },
  {
    status: 'Đang thẩm định',
    count: '200',
  },
  {
    status: 'Đã thẩm định',
    count: '200',
  },
  {
    status: 'Thẩm định không đạt',
    count: '200',
  },
  {
    status: 'Đã phê duyệt',
    count: '200',
  },
  {
    status: 'Không được phê duyệt',
    count: '200',
  },
  {
    status: 'Đã tất toán',
    count: '200',
  },
  {
    status: 'Đã tất toán',
    count: '200',
  },
  {
    status: 'Nợ nhóm 1',
    count: '200',
  }, {
    status: 'Nợ nhóm 2',
    count: '200',
  },
  {
    status: 'Nợ nhóm 3',
    count: '200',
  }, {
    status: 'Nợ nhóm 4',
    count: '200',
  },
  {
    status: 'Nợ nhóm 5',
    count: '200',
  },
];
