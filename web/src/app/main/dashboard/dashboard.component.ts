import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.alreadyLogin()) {
      this.router.navigateByUrl('/ql-ho-so/loc-ho-so');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
  }

}
