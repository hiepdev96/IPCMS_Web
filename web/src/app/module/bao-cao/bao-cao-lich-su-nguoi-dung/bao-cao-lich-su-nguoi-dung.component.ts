import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bao-cao-lich-su-nguoi-dung',
  templateUrl: './bao-cao-lich-su-nguoi-dung.component.html',
  styleUrls: ['./bao-cao-lich-su-nguoi-dung.component.scss']
})
export class BaoCaoLichSuNguoiDungComponent implements OnInit {
  lstAction = LST_ACTION;
  constructor() { }

  ngOnInit(): void {
  }

}
export const LST_ACTION = [
  'Tạo hồ sơ',
  'Hoàn thiện hồ sơ',
  'Thẩm định hồ sơ',
  'Chốt hồ sơ',
  'Phê duyệt hồ sơ'
];

