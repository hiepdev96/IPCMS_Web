import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-tao-ho-so',
  templateUrl: './form-tao-ho-so.component.html',
  styleUrls: ['./form-tao-ho-so.component.scss']
})
export class FormTaoHoSoComponent implements OnInit {
  myForm = new FormGroup({
    nameCtrl: new FormControl(),
    birthdayCtrl: new FormControl(),
    abcCtrl: new FormControl()
  });
  ctrls = this.myForm.controls;
  constructor() { }

  ngOnInit(): void {
    this.myForm.controls.abcCtrl.valueChanges.subscribe(x => console.log(x));
  }

}
