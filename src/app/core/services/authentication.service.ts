import { Injectable } from '@angular/core';
import { mockUsers } from '../../shared/mocks/mock-users';
import { User } from '../../shared/models/user.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserRequest } from 'src/app/shared/models/userRequest';
import { catchError } from 'rxjs/operators';
import { Utilities } from '../utils/utilities';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn = false;
  private apiUrl = 'http://localhost:8000/users';
  private _isUser = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient,
    private cookieService: CookieService) {}
  
  login(userRequest:UserRequest): Observable<User | undefined> {
    
    return this.http.post<User>(`${this.apiUrl}/login`, userRequest).pipe(
      tap((user) => {
        Utilities.saveObjectToCookie(this.cookieService, 'user', user);
        this.isUser = !!user;
        this.isLoggedIn = !!user;
      })
    );
  }

  register(user: User): Observable<User> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<User>(url, user);
  }

  isAuthenticated(): boolean {
   
    return this.isLoggedIn;
  }

  get isUser$() {
    return this._isUser.asObservable();
  }

  set isUser(value: boolean) {
    this._isUser.next(value);
  }

 
}
