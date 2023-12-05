import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { mockReservation } from 'src/app/shared/mocks/mockReservation';
import { Reservation } from 'src/app/shared/models/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  created(reservation: Reservation): Observable<boolean> {  
    mockReservation.push(reservation);  
    return of(true);          
  }

  getReservations(): Observable<Reservation[]> {
    
    return of(mockReservation.filter(reservation => new Date(reservation.exitDate) > new Date()));
  }

  getAllReservation():Reservation[]{
    return mockReservation;
  }

  getReservationsByHotelUserCreatedId(userId: number | undefined): Observable<Reservation[]> {
    
    return this.getReservations().pipe(
      map((reservations) => reservations.filter(reservation => reservation.hotel.userCreated.id === userId))
    );
  }
}
