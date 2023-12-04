import { LocationRoom } from "./location.interface";

export interface Room {
  id: number;
  number: string;
  baseCost: number;
  taxes: number;
  type: string;
  location: LocationRoom;
  isActive: boolean;
  hasWifi: boolean;
  hasBathtub: boolean;
  hasView: boolean;
  hasTV: boolean;
  allowsSmoking: boolean;
  isAvailable: boolean;
  numberOfBeds: number;
}
