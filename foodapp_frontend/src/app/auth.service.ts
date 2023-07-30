import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.loadAuthenticatedState();
  }

  setAuthenticated(authenticated: boolean): void {
    this.isAuthenticatedSubject.next(authenticated);
    localStorage.setItem('authenticated', authenticated.toString());
  }

  private loadAuthenticatedState(): void {
    const authenticated = localStorage.getItem('authenticated') === 'true';
    this.isAuthenticatedSubject.next(authenticated);
  }
}
