import { Room } from "./room.interface";

export interface Hotel {
  id?: number;
  name: string;
  starCategory?: number;
  description: string;
  registrationDate?: Date;
  isActive: boolean;
  images?: string[];
  rooms?: Room[];
}
