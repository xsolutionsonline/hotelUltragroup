import { Injectable } from '@angular/core';
import { mockUsers } from '../../shared/mocks/mock-users';
import { User } from '../../shared/models/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn = false;

  login(email: string, password: string): Observable<User | undefined> {
    const user = mockUsers.find(u => u.email === email && u.password === password);
    this.isLoggedIn = !!user; 
    return of(user);
  }

  register(newUser: User): void {
    const existingUser = mockUsers.find(u => u.email.toUpperCase() === newUser.email.toUpperCase());

    if (existingUser) {
      console.log('El usuario ya existe.');
    } else {
      mockUsers.push(newUser);    
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
