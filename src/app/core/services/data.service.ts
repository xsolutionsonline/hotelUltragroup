import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from 'src/app/shared/models/country';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDepartment() {
    return this.http.get<Country[]>('/../../../assets/data/departments.json');
  }

  getRoomTypes(): Observable<string[]> {
    return this.http.get<any[]>('/../../../assets/data/roomTypes.json').pipe(
      map(data => data.map(roomType => roomType.name))
    );    
  }
}
