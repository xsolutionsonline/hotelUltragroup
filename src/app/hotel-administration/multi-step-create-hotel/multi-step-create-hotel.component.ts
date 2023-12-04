import { Component, OnInit,ViewChild } from '@angular/core';
import { MatStepper  } from '@angular/material/stepper';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel-service.service';
import { Hotel } from 'src/app/shared/models/hotel.interface';
import { Room } from 'src/app/shared/models/room.interface';

@Component({
  selector: 'app-multi-step-create-hotel',
  templateUrl: './multi-step-create-hotel.component.html',
  styleUrls: ['./multi-step-create-hotel.component.scss']
})
export class MultiStepCreateHotelComponent implements OnInit{
  @ViewChild(MatStepper ) stepper!: MatStepper ;
  createdHotel!:Hotel;
  hotelId!: number;
  
  constructor(private routeA:ActivatedRoute,
    private hotelService: HotelService,
    private router: Router,) {}

  ngOnInit(): void {
    this.routeA.params.subscribe((params) => {
      this.hotelId = parseInt(params['id']);
      if(this.hotelId){
        this.hotelService.getHotelById(this.hotelId).subscribe(data => {
          this.createdHotel = data;
        })
      }
    });

  }
  
  submitStep1(hotel: Hotel) {
    this.createdHotel = {
      ...this.createdHotel,
      ...hotel
    }    
  }

  submitStep2(images: File[]) {
    this.createdHotel = {
      ...this.createdHotel,
      images:images      
    }    
    this.stepper.next();
  }

  submitStep3(rooms: Room[]) {    
    this.createdHotel = {
      ...this.createdHotel,
      rooms:rooms
    } 
    if(this.createdHotel?.id){
      this.hotelService.update(this.createdHotel);
    }else {
    this.hotelService.getHoteles().subscribe(hotels => {
      this.createdHotel = {
        ...this.createdHotel,
        id: hotels.length + 1
      }
      this.hotelService.created(this.createdHotel);
    });
    }
    
    this.router.navigate(['/list-hotels']);
  }


  back(){
    this.stepper.previous();
  }
}
