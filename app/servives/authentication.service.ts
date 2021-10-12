import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Login} from '../_models/Login';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'User';
export const API_BASE_URL = 'https://localhost:44333/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem(AUTHENTICATED_USER)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(emailaddress, password) {
    return this.http.post<any>('/Account/Login', {emailaddress, password}).toPromise().then(user => {
      sessionStorage.setItem(AUTHENTICATED_USER, JSON.stringify(user));
      this.currentUserSubject.next(user);
      console.log(user);
      return user;
    });
  }

  register(firstName, lastName, phoneNumber, emailAddress, password) {
    return this.http.post<any>('/Account/Register', {firstName, lastName, phoneNumber, emailAddress, password})
      .toPromise().then(data => {
        console.log(data);
      });
  }

  checkOut(Order) {
    return this.http.post<any[]>('/Product/SubscribeToBook', {Order}).toPromise().then(data => {
    });
  }

  logout() {
    return this.http.get<any>('/Account/Logout').toPromise().then(u => {
      sessionStorage.removeItem(AUTHENTICATED_USER);
    });

  }

}
