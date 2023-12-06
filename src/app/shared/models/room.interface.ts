import { LocationRoom } from "./location.interface";

export interface Room {
  id?: number;
  numberOfBeds: number;
  baseCost: number;
  taxes: number;
  type: string;
  location: LocationRoom;
  active: boolean;
  hasWifi?: boolean;
  hasBathtub?: boolean;
  hasView?: boolean;
  hasTV?: boolean;
  allowsSmoking?: boolean;
  numberOfPersons:number;
  images?: File[];
}
