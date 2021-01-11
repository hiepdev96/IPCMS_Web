import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ListStatusUser } from 'src/app/common/data';
import { User } from 'src/app/common/model/generic-model';
import { FormNguoiDungComponent } from '../tao-nguoi-dung/form-nguoi-dung/form-nguoi-dung.component';

@Component({
  selector: 'app-chi-tiet-nguoi-dung',
  templateUrl: './chi-tiet-nguoi-dung.component.html',
  styleUrls: ['./chi-tiet-nguoi-dung.component.scss']
})
export class ChiTietNguoiDungComponent implements OnInit {

  @Input() $item: User;
  isShowForm: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(this.$item);
  }
  getStatus(status: string): string {
    return ListStatusUser.find(x => x.value === status)?.name;
  }
  convertToDate(value: string): Date {
    const res = new Date(value + 'Z');
    if (res.toString() !== 'Invalid Date') {
      return res;
    }
    return null;
  }
}
