import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockHoteles } from 'src/app/shared/mocks/mockHoteles';
import { Hotel } from 'src/app/shared/models/hotel.interface';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = 'http://localhost:8000/hotel';


  constructor(private http: HttpClient) {}

  created(hotel: Hotel): Observable<Hotel | undefined> {
    return this.http.post<Hotel>(`${this.apiUrl}`, hotel);
  }

  update(id:number,hotel: Hotel): Observable<Hotel | null> {
    return this.http.put<Hotel>( `${this.apiUrl}/update/${id}`, hotel)     
  }

  getHoteles(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`);
  }

  getHotelesByActive(isActive: boolean): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}?isActive=${isActive}`);
  }
}
