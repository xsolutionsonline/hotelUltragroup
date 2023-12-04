import { Hotel } from "../models/hotel.interface";


export const mockHoteles:Hotel[] = [
  {
    id:1,
    name: 'Hotel 1',
    description: 'Descripción del Hotel 1',
    starCategory:3,
    country: 'Colombia',
    department: 'Antioquia',
    city: 'Medellín',
    isActive: true,
    images: [],
    rooms: [
      {
        id:1,
        numberOfBeds: 1,
        baseCost: 100,
        taxes: 10,
        type: 'Compartidas',
        location: {
          floor: 1,
          roomNumber: 101,
        },
        isActive: true,
        hasWifi: true,
        hasBathtub: true,
        hasView: true,
        hasTV: true,
        allowsSmoking: true,
        images: [],
      },
    ],
  }, 
  {
    id:2,
    name: 'Hotel 2',
    description: 'Descripción del Hotel 2',
    starCategory:3,
    country: 'Colombia',
    department: 'Antioquia',
    city: 'Envigado',
    isActive: true,
    images: [],
    rooms: [
      {
        id:2,
        numberOfBeds: 4,
        baseCost: 100000,
        taxes: 100,
        type: 'Familiar',
        location: {
          floor: 12,
          roomNumber: 1205,
        },
        isActive: false,
        hasWifi: true,
        hasBathtub: true,
        hasView: true,
        hasTV: true,
        allowsSmoking: true,
        images: [],
      },
    ],
  },     
]