import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmAlertData } from 'src/app/common/model/confirm-alert-data';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmAlertData,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close(true);
  }
}
