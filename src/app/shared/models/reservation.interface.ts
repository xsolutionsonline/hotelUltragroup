import { EmergencyContact } from './emergencyContact .interface';
import { Hotel } from './hotel.interface';
import { Room } from './room.interface';
import { User } from './user.interface';

export interface Reservation {
  id?:number;
  hotel: Hotel;
  entryDate: Date;
  exitDate: Date;
  room: Room;
  users:User[];
  emergencyContact: EmergencyContact;
}
