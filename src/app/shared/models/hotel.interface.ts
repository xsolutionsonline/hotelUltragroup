import { Room } from "./room.interface";
import { User } from "./user.interface";

export interface Hotel {
  id?: number;
  name: string;
  starCategory?: number;
  description: string;
  registrationDate?: Date;
  userCreated:User;
  isActive: boolean;
  images?: File[];
  country?:string;
  department?:string;
  city?:string;
  rooms?: Room[];
}
