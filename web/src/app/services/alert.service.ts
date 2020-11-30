import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmMessageDialogComponent } from '../shared/dialogs/confirm-message-dialog/confirm-message-dialog.component';
import { ConfirmDialogForm } from './../common/model/confirm-dialog-form';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private dialog: MatDialog
  ) { }

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
