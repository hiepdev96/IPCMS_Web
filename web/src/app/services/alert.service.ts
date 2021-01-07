import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ConfirmMessageDialogComponent } from '../shared/dialogs/confirm-message-dialog/confirm-message-dialog.component';
import { ConfirmDialogForm } from './../common/model/confirm-dialog-form';
import { ConfirmAlertData } from './../common/model/confirm-alert-data';
import { ConfirmDialogComponent } from '../shared/dialogs/confirm-dialog/confirm-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private dialog: MatDialog,
    private toastrService: ToastrService
  ) { }
  success(message: string, title: string = ''): void {
    console.log('Thành công');
    this.toastrService.success(message, title);
  }
  error(message: string, title: string = ''): void {
    console.log('Lỗi');
    this.toastrService.error(message, title);
  }
  warning(message: string, title: string = ''): void {
    console.log('Cảnh báo');
    this.toastrService.warning(message, title);
  }
  info(message: string, title: string = ''): void {
    console.log('Thông tin');
    this.toastrService.info(message, title);
  }
  confirm(message: string, title: string): Observable<boolean> {
    const form = new ConfirmAlertData({
      message,
      title
    });
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: form,
      panelClass: 'custom-dialog',
    });
    return dialogRef.afterClosed();
    // return of(true);
  }

  confirmMessage(title: string, question: string, required: boolean = false): Observable<any> {
    const form = new ConfirmDialogForm();
    form.title = title;
    form.message = question;
    form.required = required;
    const dialogRef = this.dialog.open(ConfirmMessageDialogComponent, {
      data: form,
      minWidth: '500px'
    });
    return dialogRef.afterClosed();
  }
}
