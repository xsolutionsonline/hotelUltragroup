import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateReservationModalComponent } from '../create-reservation-modal/create-reservation-modal.component';
import { Hotel } from 'src/app/shared/models/hotel.interface';
import { HotelService } from 'src/app/core/services/hotel-service.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/shared/models/room.interface';
import { Reservation } from 'src/app/shared/models/reservation.interface';
import { Utilities } from 'src/app/core/utils/utilities';
import { CookieService } from 'ngx-cookie-service';
import { SearchFilter } from 'src/app/shared/models/searchFilter.interface';
@Component({
  selector: 'app-list-rooms-reservation',
  templateUrl: './list-rooms-reservation.component.html',
  styleUrls: ['./list-rooms-reservation.component.scss']
})
export class ListRoomsReservationComponent implements OnInit {
  allReservationRooms!: Room[];
  rooms!: Room[] | undefined;
  reservation!: Reservation;
  hotelsFilter!: Hotel[];
  searchFilters!: SearchFilter;

  constructor(
    private routeA: ActivatedRoute,
    private dialog: MatDialog,
    private hotelService: HotelService,
    private reservationService: ReservationService,
    private cookieService: CookieService,
    private router: Router,) { }

  ngOnInit(): void {
    this.routeA.params.subscribe((params) => {
      forkJoin({
        hotel: this.hotelService.getHotelById(parseInt(params['id'])),
        reservations: this.reservationService.getReservations()
      }).subscribe({
        next: ({ hotel, reservations }) => {
          this.searchFilters = Utilities.getObjectFromCookie(this.cookieService, 'filterHotels');
          this.hotelsFilter = Utilities.filterHotels([hotel], reservations, this.searchFilters);
          this.rooms = this.hotelsFilter[0].rooms;
        },
        error: error => {
          console.error('Error al obtener datos', error);
        }
      });

    });
  }

  isRoomInReservation(room: Room): boolean {
    if (this.allReservationRooms?.length === 0) {
      return false;
    }

    return this.allReservationRooms.some(r => r.id === room.id);
  }



  openCreateReservationModal(room: Room): void {
    const dialogRef = this.dialog.open(CreateReservationModalComponent, {
      width: '70%',
      data: { maxGuests: this.searchFilters.numberOfPersons }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createdReservation(result, room);
      }
    });
  }

  createdReservation(guest: any, room: Room) {
    this.reservation = {
      ...guest,
      room,
      id: this.reservationService.getAllReservation().length + 1,
      hotel: this.hotelsFilter,
      entryDate: this.searchFilters.entryDate,
      exitDate: this.searchFilters.exitDate,
      numberOfPersons: this.searchFilters.numberOfPersons
    }
    this.reservationService.created(this.reservation).subscribe(() => {
      this.cookieService.delete('filterHotels');
      this.router.navigate(['/list-hotels-reservation']);
    });
  }

}
