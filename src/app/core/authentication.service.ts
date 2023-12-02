import { Injectable } from '@angular/core';
import { mockUsers } from '../shared/mocks/mock-users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn = false;

  login(email: string, password: string): boolean {
    debugger;
    const user = mockUsers.find(u => u.email === email && u.password === password);
    this.isLoggedIn = !!user; 

    return !!user;
  }


  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
