import { Component, EventEmitter, Output, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalImagesRoomComponent } from './modal-images-room/modal-images-room.component';
import { Room } from 'src/app/shared/models/room.interface';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss'],
})
export class RoomFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<Room[]>();
  @Output() back = new EventEmitter<void>();

  roomForm!: FormGroup;
  roomTypes!: string[];
  @Input() rooms:Room[]=[];
  images: File[] =[];
  idEdit: number | undefined;
  titleRoom = 'crear habitación';

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

  openImageUploadModal(event:Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(ModalImagesRoomComponent, {
      width: '50%',
      maxHeight: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.images = result;      
    });
  }

  submitRoom() {
    if(this.images?.length===0 && !this.roomForm.valid){
      return;
    }
    const room:Room = {
      ...this.roomForm.value,
      location: {
        floor:this.roomForm.get('floor')?.value,
        roomNumber:this.roomForm.get('roomNumber')?.value
      },
      //images:this.images
    }
    if(this.idEdit){
      const index = this.rooms.findIndex(data => data.id =this.idEdit);
      this.rooms[index]=room;
    }else {
      this.rooms.push(room);
    }
    
    this.initializeForm();
  
  }

  initializeForm() {
    this.roomForm = this.fb.group({
      baseCost: ['', Validators.required],
      numberOfPersons: [null, Validators.required],
      taxes: ['', Validators.required],
      type: ['', Validators.required],
      floor: ['', Validators.required],
      roomNumber: ['', Validators.required],
      active: [true, Validators.required],
      hasWifi: [false],
      hasBathtub: [false],
      hasView: [false],
      hasTV: [false],
      allowsSmoking: [false],
      numberOfBeds: [1, Validators.required],
    });

    this.idEdit=undefined;
    this.titleRoom = 'crear habitación';
    
  }

  submitFormRoom(): void {
    if (this.rooms && this.rooms.length>0) {
      this.formSubmit.emit(this.rooms);
    }
  }

  onKeydown(event: any): void {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }

  backStepper() {
    this.back.emit();
  }

  editRoom(room: Room,index:any): void {
    this.roomForm.patchValue({...room,
      floor: room.location.floor, 
      roomNumber: room.location.roomNumber,});
      this.idEdit = room.id;

      if(!this.idEdit){
        this.rooms.splice(index,1);
      }
      this.titleRoom = room.id ? 'actualizar habitacion':'crear habitación';
  }
}
