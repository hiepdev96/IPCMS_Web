import { Component, OnInit } from '@angular/core';
import { ProfileClient } from './connection/profile-connector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'web';
  constructor(
    private profileClient: ProfileClient
  ) { }
  ngOnInit(): void {
    this.profileClient.getProvincial()
      .subscribe(x => console.log(x));
  }
}
