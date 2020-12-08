import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap-nhat-pham-vi-nguoi-dung',
  templateUrl: './cap-nhat-pham-vi-nguoi-dung.component.html',
  styleUrls: ['./cap-nhat-pham-vi-nguoi-dung.component.scss']
})
export class CapNhatPhamViNguoiDungComponent implements OnInit {
  lstScope: number[] = [1];
  step = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addScope(): void {
    this.lstScope.push(1);
    this.step = this.lstScope.length - 1;
  }
  removeScope(): void {
    this.lstScope.splice(0, 1);
  }
  setStep(idx: number): void {
    this.step = idx;
  }
}
