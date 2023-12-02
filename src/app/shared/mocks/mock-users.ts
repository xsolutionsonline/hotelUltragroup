import { User } from '../models/user.interface';

export const mockUsers: User[] = [
  {
    id: 1,
    firstName: 'Nombre1',
    lastName: 'Apellido1',
    birthDate: new Date(),
    contact: '123456789',
    email: 'user1@example.com',
    password: '123456',
    active: true,
    role: 'user'
  },
  {
    id: 2,
    firstName: 'Nombre2',
    lastName: 'Apellido2',
    birthDate: new Date(),
    contact: '987654321',
    email: 'jerry@gmail.com',
    password: '123456',
    active: true,
    role: 'admin'
  },  
];
