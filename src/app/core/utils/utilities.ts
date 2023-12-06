import { MatSnackBar } from '@angular/material/snack-bar';
import { Hotel } from 'src/app/shared/models/hotel.interface';
import { Reservation } from 'src/app/shared/models/reservation.interface';
import { SearchFilter } from 'src/app/shared/models/searchFilter.interface';

export class Utilities {
  static showSnackbar(
    snackBar: MatSnackBar,
    message: string,
    duration: number = 3000,
    verticalPosition: 'top' | 'bottom' = 'bottom',
    panelClass: string[] = []
  ): void {
    snackBar.open(message, 'Cerrar', {
      duration,
      verticalPosition,
      panelClass,
    });
  }

  static saveObjectToCookie(cookieService: any, key: string, object: any): void {
    const jsonString = JSON.stringify(object);
    cookieService.set(key, jsonString);
  }

  static getObjectFromCookie(cookieService: any, key: string): any {
    const jsonString = cookieService.get(key);

    if (jsonString) {
      return JSON.parse(jsonString);
    } else {
      return null;
    }
  }



  static filterHotels(hotels: Hotel[], reservations: Reservation[], filters: SearchFilter): Hotel[] {
    const filteredReservations = reservations?.filter(reservation => {
      const entryDateValid =
        new Date(reservation.entryDate) >= new Date(filters.exitDate) || new Date(reservation.exitDate) <= new Date(filters.entryDate);
      const exitDateValid =
        new Date(reservation.exitDate) >= new Date(filters.exitDate) || new Date(reservation.exitDate) <= new Date(filters.entryDate);

      return !(entryDateValid && exitDateValid);
    });

    const filteredHotels = hotels.map(hotel => {
      const filteredRooms = hotel.rooms
        ? filteredReservations ? hotel.rooms.filter(room => {
            return filteredReservations ?!filteredReservations?.some(reservation => reservation.room.id === room.id) && hotel.city === filters.city && room.numberOfPersons >= filters.numberOfPersons:true;
          })
        :hotel.rooms: [];
      return { ...hotel, rooms: filteredRooms };
    }).filter(hotel => {
      return hotel.rooms.length > 0;
    });

    return filteredHotels;
  }
}