import { Component, OnInit } from '@angular/core';
import { AlertService } from './../../services/alert.service';

@Component({
  selector: 'app-chi-tiet-ho-so',
  templateUrl: './chi-tiet-ho-so.component.html',
  styleUrls: ['./chi-tiet-ho-so.component.scss']
})
export class ChiTietHoSoComponent implements OnInit {
  isShowUpdate: any;
  isShowCheckbox = false;
  isShowChecked = true;
  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }
  close(): void {
    close();
  }
  showUpdate(isShow: boolean): void {
    this.isShowUpdate = isShow;
  }
  openDialogConfirm(): void {
    this.alertService.confirmMessage('Xác nhận bỏ qua hồ sơ', 'Bạn có chắc chắn muốn bỏ hồ sơ không?');
  }
}
