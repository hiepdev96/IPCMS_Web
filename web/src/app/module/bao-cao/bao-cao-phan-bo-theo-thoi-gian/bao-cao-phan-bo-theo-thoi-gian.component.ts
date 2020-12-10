import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-bao-cao-phan-bo-theo-thoi-gian',
  templateUrl: './bao-cao-phan-bo-theo-thoi-gian.component.html',
  styleUrls: ['./bao-cao-phan-bo-theo-thoi-gian.component.scss']
})
export class BaoCaoPhanBoTheoThoiGianComponent implements OnInit {
  myForm = new FormGroup({
    loaiBaoCaoCtrl: new FormControl(),
    datePickerCtrl: new FormControl(),
  });
  ranges: any = {
    'Hôm nay': [moment(), moment()],
    'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    '7 ngày trước': [moment().subtract(6, 'days'), moment()],
    '30 ngày trước': [moment().subtract(29, 'days'), moment()],
    'Tháng này': [moment().startOf('month'), moment().endOf('month')],
    'Tháng trước': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
  };
  locale = {
    cancelLabel: 'Hủy',
    applyLabel: 'Đồng ý',
    format: 'DD/MM/YYYY',
    daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    monthNames: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
  };
  displayedColumns: string[] = ['postion', 'status', 'count'];
  ngOnInit(): void {
  }

}
