import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { mockReservation } from 'src/app/shared/mocks/mockReservation';
import { Reservation } from 'src/app/shared/models/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8000/reservation';

  constructor(private http: HttpClient) {}

  created(reservation: Reservation): Observable<Reservation> {  
    return this.http.post<Reservation>(`${this.apiUrl}`, reservation);          
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/future`);
  }

  getAllReservation():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl);
  }

  getReservationsByHotelUserCreatedId(userId: number | undefined): Observable<Reservation[]> {
    
    return this.http.get<Reservation[]>(`${this.apiUrl}/${userId}`);
  }
}
