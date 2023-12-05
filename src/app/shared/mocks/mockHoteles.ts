import { Hotel } from "../models/hotel.interface";


export const mockHoteles: Hotel[] = [
  {
    id: 1,
    name: 'Hotel 1',
    description: 'Descripción del Hotel 1',
    starCategory: 3,
    country: 'Colombia',
    department: 'Antioquia',
    city: 'Medellín',
    isActive: true,
    images: [],
    userCreated:{
      id: 2,
      firstName: 'Nombre2',
      lastName: 'Apellido2',
      birthDate: new Date(),
      contact: '987654321',
      email: 'jerry@gmail.com',
      password: '123456',
      active: true,
      role: 'admin',
      gender: 'Femenino',
      documentType: 'Cedula',
      documentNumber: '1017162855',
      phoneNumber: '3246718055'
    },
    rooms: [
      {
        id: 1,
        numberOfBeds: 1,
        numberOfPersons: 5,
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
        hasTV: false,
        allowsSmoking: true,
        images: [],
      },
      {
        id: 2,
        numberOfBeds: 2,
        numberOfPersons: 8,
        baseCost: 200,
        taxes: 20,
        type: 'Compartidas',
        location: {
          floor: 2,
          roomNumber: 201,
        },
        isActive: true,
        hasWifi: false,
        hasBathtub: true,
        hasView: true,
        hasTV: true,
        allowsSmoking: true,
        images: [],
      },
      {
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
    ],
  },
  {
    id: 2,
    name: 'Hotel 2',
    description: 'Descripción del Hotel 2',
    starCategory: 3,
    country: 'Colombia',
    department: 'Antioquia',
    city: 'Envigado',
    isActive: true,
    images: [],
    userCreated:{
      id: 2,
      firstName: 'Nombre2',
      lastName: 'Apellido2',
      birthDate: new Date(),
      contact: '987654321',
      email: 'jerry@gmail.com',
      password: '123456',
      active: true,
      role: 'admin',
      gender: 'Femenino',
      documentType: 'Cedula',
      documentNumber: '1017162855',
      phoneNumber: '3246718055'
    },
    rooms: [
      {
        id: 2,
        numberOfBeds: 4,
        baseCost: 100000,
        numberOfPersons: 0,
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