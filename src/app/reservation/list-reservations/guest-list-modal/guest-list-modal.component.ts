import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-guest-list-modal',
  templateUrl: './guest-list-modal.component.html',
  styleUrls: ['./guest-list-modal.component.scss']
})
export class GuestListModalComponent {
  guests: User[];

  constructor(
    public dialogRef: MatDialogRef<GuestListModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.guests = data.guests;
  }

  close(): void {
    this.dialogRef.close();
  }
}
