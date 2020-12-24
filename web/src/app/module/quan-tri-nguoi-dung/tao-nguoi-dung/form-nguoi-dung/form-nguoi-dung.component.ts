import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-nguoi-dung',
  templateUrl: './form-nguoi-dung.component.html',
  styleUrls: ['./form-nguoi-dung.component.scss']
})
export class FormNguoiDungComponent implements OnInit {
  myForm = new FormGroup({
    nameCtrl: new FormControl(),
    phoneCtrl: new FormControl(),
    emailCtrl: new FormControl(),
    roleCtrl: new FormControl(),
    idCtrl: new FormControl(),
    organizationCtrl: new FormControl(),
    positionCtrl: new FormControl(),
    addressCtrl: new FormControl(),
    moTaCtrl: new FormControl(),
  });
  lstScope: number[] = [1, 2, 3];
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
  closed(): void {
    this.step = null;
  }
}
