import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { ImageUploadComponent } from 'src/app/shared/components/image-upload/image-upload.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalImagesRoomComponent } from './modal-images-room/modal-images-room.component';
import { Room } from 'src/app/shared/models/room.interface';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss'],
})
export class RoomFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<FormGroup>();
  @Output() back = new EventEmitter<void>();

  roomForm!: FormGroup;
  roomTypes!: string[];
  rooms:Room[]=[];

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeForm();
    this.obtainRoomTypes();
  }

  obtainRoomTypes() {
    this.dataService.getRoomTypes().subscribe((services) => {
      this.roomTypes = services;
    });
  }

  openImageUploadModal() {
    const dialogRef = this.dialog.open(ModalImagesRoomComponent, {
      width: '50%',
      maxHeight: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró', result);
      
    });
  }

  createRoom() {
    const newRoom:Room = {
      ...this.roomForm.value,
      location: {
        floor:this.roomForm.get('floor')?.value,
        roomNumber:this.roomForm.get('roomNumber')?.value
      }
    }
    

    this.rooms.push(newRoom);
  
    this.initializeForm();
  
  }

  initializeForm() {
    this.roomForm = this.fb.group({
      number: ['', Validators.required],
      baseCost: [0, Validators.required],
      taxes: [0, Validators.required],
      type: ['', Validators.required],
      floor: ['', Validators.required],
      roomNumber: ['', Validators.required],
      isActive: [true, Validators.required],
      hasWifi: [false],
      hasBathtub: [false],
      hasView: [false],
      hasTV: [false],
      allowsSmoking: [false],
      numberOfBeds: [1, Validators.required],
    });
  }

  submitRoom(): void {
    debugger;
    if (this.roomForm.valid) {
      this.formSubmit.emit(this.roomForm.value);
    }
  }

  onContactKeydown(event: any): void {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }



  backStepper() {
    this.back.emit();
  }
}
