import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockHoteles } from 'src/app/shared/mocks/mockHoteles';
import { Hotel } from 'src/app/shared/models/hotel.interface';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  
  getHoteles(): Observable<Hotel[]> {
    return of(mockHoteles);
  }

  created(hotel: Hotel): void {
    const existingHotel = mockHoteles.find(u => u.name.toUpperCase() === hotel.name.toUpperCase());

    if (existingHotel) {
      console.log('El hotel ya existe.');
    } else {
      mockHoteles.push(hotel);          
    }
  }

  update(hotel: Hotel): Observable<Hotel | null> {
    const index = mockHoteles.findIndex((h) => h.id === hotel.id);

    if (index !== -1) {
      mockHoteles[index] = { ...mockHoteles[index], ...hotel };
      return of(mockHoteles[index]);
    } 
      return of(null);    
  }

  getHotelById(id: number): Observable<any> {
    const hotel = mockHoteles.find((h) => h.id === id);
    return of(hotel);
  }
}
