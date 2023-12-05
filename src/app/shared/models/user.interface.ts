export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  contact: string;
  email: string;
  password: string;
  active: boolean;
  role: string;
  gender: string;
  documentType: string;
  documentNumber: string;
  phoneNumber: string;
}
