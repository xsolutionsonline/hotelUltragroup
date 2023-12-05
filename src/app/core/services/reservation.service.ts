import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockReservation } from 'src/app/shared/mocks/mockReservation';
import { Reservation } from 'src/app/shared/models/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  getReservations(): Observable<Reservation[]> {
    return of(mockReservation.filter(reservation => new Date(reservation.exitDate) > new Date()));
  }
}
