import { Component, OnInit } from '@angular/core';
declare var sha256: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web';
  ngOnInit(): void {
    let abc = '\u0000SALE\u0000C5C631CF945CCAA931C6F03F0F800B47\u0000F15\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000';
    let a = sha256(abc);

    console.log(a);
  }
}
