import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string;
  lstTitle: string[];

  constructor() { }

  ngOnInit(): void {
  }
  setTitleNav(title: string): void {
    console.log(title);
    this.title = title;
  }
  setTitlesNav(lst: string[]): void {
    this.lstTitle = lst;
  }
}
