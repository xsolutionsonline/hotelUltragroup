import { Reservation } from '../models/reservation.interface';
import { mockUsers } from './mock-users';
import { mockHoteles } from './mockHoteles';

export const mockReservation: Reservation[] = [
  {
    id: 1,
    hotel: mockHoteles[0],
    entryDate: new Date('2023-12-6'),
    exitDate: new Date('2023-12-31'),
    numberOfPersons:4,
    users:[mockUsers[0],mockUsers[0]],
    room: {
      id: 3,
      numberOfBeds: 3,
      numberOfPersons: 3,
      baseCost: 300,
      taxes: 30,
      type: 'Compartidas',
      location: {
        floor: 3,
        roomNumber: 301,
      },
      isActive: true,
      hasWifi: true,
      hasBathtub: false,
      hasView: false,
      hasTV: true,
      allowsSmoking: true,
      images: [],
    },
    emergencyContact: {
      id:1,
      fullName: 'John Doe',
      phoneNumber: '3223456789',
    },
  },
  {
    id: 2,
    hotel: mockHoteles[1],
    entryDate: new Date('2023-02-01'),
    exitDate: new Date('2023-02-10'),
    numberOfPersons:5,
    users:[],
    room: {
      id: 1,
      numberOfBeds: 2,
      baseCost: 200,
      taxes: 20,
      numberOfPersons: 2,
      type: 'Matrimoniales',
      location: { floor: 1, roomNumber: 101 },
      isActive: true,
      hasWifi: true,
      hasBathtub: true,
      hasView: true,
      hasTV: true,
      allowsSmoking: false,
    },
    emergencyContact: {
      id:2,
      fullName: 'John Doe 2',
      phoneNumber: '3246665559',
    },
  },
];