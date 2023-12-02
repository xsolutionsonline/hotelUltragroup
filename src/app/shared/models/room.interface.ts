export interface Room {
  id: number;
  number: string;
  baseCost: number;
  taxes: number;
  type: string;
  location: Location;
  isActive: boolean;
}
