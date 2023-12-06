import { Component, OnInit,ViewChild } from '@angular/core';
import { MatStepper  } from '@angular/material/stepper';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HotelService } from 'src/app/core/services/hotel-service.service';
import { Utilities } from 'src/app/core/utils/utilities';
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
    private router: Router,
    private cookieService: CookieService) {}

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
    //  images:images      
    }    
    this.stepper.next();
  }

  submitStep3(rooms: Room[]) { 
    this.createdHotel = {
      ...this.createdHotel,
      rooms:rooms,
      userCreated:Utilities.getObjectFromCookie(this.cookieService,'user')
    } 
    
    if(this.createdHotel?.id){
      this.hotelService.update(this.createdHotel?.id,this.createdHotel).subscribe(data => {
        this.router.navigate(['/list-hotels']);
      });
    }else {
      this.hotelService.created(this.createdHotel).subscribe(data => {
        this.router.navigate(['/list-hotels']);
      });
    }
    

  }


  back(){
    this.stepper.previous();
  }
}
