import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hotel } from 'src/app/shared/models/hotel.interface';
import { HotelService } from 'src/app/core/services/hotel-service.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Reservation } from 'src/app/shared/models/reservation.interface';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { Utilities } from 'src/app/core/utils/utilities';
import { SearchFilter } from 'src/app/shared/models/searchFilter.interface';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-list-hotels-reservation',
  templateUrl: './list-hotels-reservation.component.html',
  styleUrls: ['./list-hotels-reservation.component.scss']
})
export class ListHotelsReservationComponent implements OnInit {
  hotels: Hotel[] = [];
  reservations!: Reservation[];
  hotelsFilter!: Hotel[];

  constructor(private dialog: MatDialog,
    private hotelService: HotelService,
    private reservationService: ReservationService,
    private router: Router,
    private cookieService: CookieService,
    ) { }
    

  ngOnInit(): void {
    forkJoin({
      hotels: this.hotelService.getHotelesByActive(true),
      reservations: this.reservationService.getReservations()
    }).subscribe({
      next: ({ hotels, reservations }) => {
        this.reservations = reservations;
        this.hotels = hotels;
      },
      error: error => {
        console.error('Error al obtener datos', error);
      }
    });

    
  }


  openCreateReservationModal(hotel: any): void {
    this.router.navigate(['/list-rooms-reservation', hotel.id]);
  }

  searchFilterHotels(filters: SearchFilter): void {
    Utilities.saveObjectToCookie(this.cookieService, 'filterHotels', filters);
    this.hotelsFilter =  Utilities.filterHotels(this.hotels, this.reservations, filters);;
  }

}
