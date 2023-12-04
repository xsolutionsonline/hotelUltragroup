import { LocationRoom } from "./location.interface";

export interface Room {
  id?: number;
  numberOfBeds: number;
  baseCost: number;
  taxes: number;
  type: string;
  location: LocationRoom;
  isActive: boolean;
  hasWifi?: boolean;
  hasBathtub?: boolean;
  hasView?: boolean;
  hasTV?: boolean;
  allowsSmoking?: boolean;
  images?: File[];
}
