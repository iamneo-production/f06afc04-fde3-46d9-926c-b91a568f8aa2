import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  setAuthenticated(status: boolean): void {
    this.isAuthenticated = status;
  }
}
