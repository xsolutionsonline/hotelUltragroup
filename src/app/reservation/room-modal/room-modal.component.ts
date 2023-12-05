import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateReservationModalComponent } from '../create-reservation-modal/create-reservation-modal.component';
import { Room } from 'src/app/shared/models/room.interface';

@Component({
  selector: 'app-room-modal',
  templateUrl: './room-modal.component.html',
  styleUrls: ['./room-modal.component.scss']
})
export class RoomModalComponent {
  room!: Room;

  constructor(
    public dialogRef: MatDialogRef<RoomModalComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  reserveRoom(): void {
    const createReservationDialog = this.dialog.open(CreateReservationModalComponent, {
      width: '400px',
      data: { room: this.data.room }
    });

    createReservationDialog.afterClosed().subscribe(result => {
      this.dialogRef.close();
    });
  }

}
