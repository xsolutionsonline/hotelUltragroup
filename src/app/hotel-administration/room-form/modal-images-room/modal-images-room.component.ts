import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-images-room',
  templateUrl: './modal-images-room.component.html',
  styleUrls: ['./modal-images-room.component.scss']
})
export class ModalImagesRoomComponent {
  images! : File[];
  constructor(
    public dialogRef: MatDialogRef<ModalImagesRoomComponent>,    
  ) {}


  submit(files:File[]) {
    this.images= files
    this.closeModal();
  }
  
  back(){
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close(this.images);
  }


}
