import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Chart } from 'angular-highcharts';

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
  displayedColumns: string[] = ['postion', 'status', 'count'];
  chart: any;
  ngOnInit(): void {

  }
  thongKe(): void {
    this.chart = new Chart({
      chart: {
        style: {
          fontFamily: 'Roboto, "Helvetica Neue", sans-serif'
        }
      },
      title: {
        text: 'Thống kê số lượng hồ sơ theo thời gian',
        style: {
          fontFamily: 'Roboto, "Helvetica Neue", sans-serif'
        }
      },
      xAxis: {
        categories: [
          '12/12',
          '13/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12'
        ],
      },
      yAxis: {
        title: {
          text: 'Số lượng hồ sơ',
          style: {
            fontFamily: 'Roboto, "Helvetica Neue", sans-serif'
          }
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' hồ sơ'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5
        }
      },
      series: [{
        name: 'TẠO',
        type: 'spline',
        data: [3, 4, 3, 5, 4, 10, 12]
      }, {
        name: 'HOÀN THIỆN',
        type: 'spline',
        data: [1, 3, 4, 3, 3, 5, 4]
      }, {
        name: 'THẨM ĐỊNH',
        type: 'spline',
        data: [2, 5, 1, 9, 9, 0, 5]
      },
      {
        name: 'PHÊ DUYỆT',
        type: 'spline',
        data: [6, 2, 3, 1, 8, 15, 1]
      },
      {
        name: 'GIẢI NGÂN',
        type: 'spline',
        data: [7, 4, 5, 2, 7, 12, 15]
      }
      , {
        name: 'TẤT TOÁN',
        type: 'spline',
        data: [8, 6, 7, 3, 6, 15, 25]
      }
      ]
    });
  }
}
