import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly TOKEN_KEY = 'authToken';
  private tokenSubject: BehaviorSubject<string | null>;
  private firstNameSubject: BehaviorSubject<string | null>;

  constructor() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const firstName = localStorage.getItem('firstname');
    this.tokenSubject = new BehaviorSubject<string | null>(token);
    this.firstNameSubject = new BehaviorSubject<string | null>(firstName);
  }

  getFirstName(): string | null {
    return this.firstNameSubject.value;
  }

  setFirstName(firstName: string): void {
    localStorage.setItem('firstname', firstName);
    this.firstNameSubject.next(firstName);
  }

  getFirstNameObservable(): Observable<string | null> {
    return this.firstNameSubject.asObservable();
  }

  removeFirstName(): void {
    localStorage.removeItem('firstname');
    this.firstNameSubject.next(null);
  }


  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  getTokenObservable(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.tokenSubject.next(null);
  }
}
