import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogForm } from './../../../common/model/confirm-dialog-form';
@Component({
  selector: 'app-confirm-message-dialog',
  templateUrl: './confirm-message-dialog.component.html',
  styleUrls: ['./confirm-message-dialog.component.scss']
})
export class ConfirmMessageDialogComponent implements OnInit {

  @ViewChild('ghiChu') $ghiChu: ElementRef;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogForm,
    public dialogRef: MatDialogRef<ConfirmMessageDialogComponent>
  ) { }

  ngOnInit(): void {

  }
  confirm(): void {
    const lyDo = this.$ghiChu.nativeElement.value;
    this.dialogRef.close({
      isConfirm: true,
      message: lyDo
    });
  }
}
