import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateReservationModalComponent } from '../create-reservation-modal/create-reservation-modal.component';
import { Hotel } from 'src/app/shared/models/hotel.interface';
import { HotelService } from 'src/app/core/services/hotel-service.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/shared/models/room.interface';
import { Reservation } from 'src/app/shared/models/reservation.interface';
@Component({
  selector: 'app-list-rooms-reservation',
  templateUrl: './list-rooms-reservation.component.html',
  styleUrls: ['./list-rooms-reservation.component.scss']
})
export class ListRoomsReservationComponent implements OnInit {
  hotel!: Hotel;
  allReservationRooms!: Room[];
  rooms!: Room[];
  reservation!:Reservation;

  constructor(
    private routeA: ActivatedRoute,
    private dialog: MatDialog,
    private hotelService: HotelService,
    private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.routeA.params.subscribe((params) => {
      forkJoin({
        hotel: this.hotelService.getHotelById(parseInt(params['id'])),
        reservations: this.reservationService.getReservations()
      }).subscribe({
        next: ({ hotel, reservations }) => {
          const reservation = reservations.filter(reservation => reservation.hotel === hotel.id)
          this.allReservationRooms = Array.from(new Set(reservation?.flatMap(reservation => reservation.room)));
          this.rooms = hotel.rooms.filter((room: any) => !this.isRoomInReservation(room));
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



  openCreateReservationModal(room: any): void {
    const dialogRef = this.dialog.open(CreateReservationModalComponent, {
      width: '70%',   
      data: { maxGuests: 2 }  
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.createdReservation(result);
      }      
    });
  }
  createdReservation(guest: any) {
    this.reservation = {
      ...guest,
    }
  }
}
