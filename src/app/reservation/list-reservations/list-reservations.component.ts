import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Reservation } from 'src/app/shared/models/reservation.interface';
import { Utilities } from 'src/app/core/utils/utilities';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/shared/models/user.interface';
import { GuestListModalComponent } from './guest-list-modal/guest-list-modal.component';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss']
})
export class ListReservationsComponent implements OnInit {
  reservations!: Reservation[] | undefined;
  reservation!: Reservation;
  user!: User;
  
  

  constructor(
    private dialog: MatDialog,
    private reservationService: ReservationService,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.user = Utilities.getObjectFromCookie(this.cookieService, 'user');
    
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getReservationsByHotelUserCreatedId(this.user?.id).subscribe({
      next: (reservations) => {
        this.reservations = reservations;
      },
      error: (error) => {
        console.error('Error fetching reservations:', error);
      }
    });
  }
 
  openCreateReservationModal(reservation: Reservation): void {
    this.dialog.open(GuestListModalComponent, {
      width: '40%',
      data: {guests : reservation.users }
    });
   
  } 

}
