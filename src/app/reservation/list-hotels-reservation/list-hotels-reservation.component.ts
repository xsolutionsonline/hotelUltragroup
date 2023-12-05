import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hotel } from 'src/app/shared/models/hotel.interface';
import { HotelService } from 'src/app/core/services/hotel-service.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Reservation } from 'src/app/shared/models/reservation.interface';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';


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
    private router: Router) { }

  ngOnInit(): void {
    forkJoin({
      hotels: this.hotelService.getHotelesByActive(),
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

  private filterHotelRooms(hotel: Hotel): boolean | undefined {
    if (this.reservations.length === 0) {
      return true;
    }

    return hotel.rooms?.some(() => !this.reservations.some(reservation => reservation.room));
  }

  openCreateReservationModal(hotel: any): void {
    this.router.navigate(['/list-rooms-reservation', hotel.id]);
  }

  searchFilterHotels(filters: any): void {
    debugger;
  
    const filteredReservations = this.reservations.filter(reservation => {
      const entryDateValid = new Date(reservation.entryDate) >= new Date(filters.entryDate);
      const exitDateValid = new Date(reservation.exitDate) <= new Date(filters.exitDate);
      return entryDateValid && exitDateValid;
    });
  
    const filteredHotels = this.hotels.filter(hotel => {
      const isNotInReservation = !filteredReservations.some(reservation =>
        reservation.hotel.id === hotel.id
      );
  
      const numberOfPersonsValid = hotel.rooms ?
        hotel.rooms.some(data => data.numberOfPersons >= filters.numberOfPersons) :
        false;
  
      const cityValid = hotel.city === filters.city;
  
      return isNotInReservation && numberOfPersonsValid && cityValid;
    });
  
    this.hotelsFilter = filteredHotels;
  }
  
}
