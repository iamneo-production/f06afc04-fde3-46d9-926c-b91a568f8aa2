import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  userType: string = '';

  setAuthenticated(status: boolean, userType: string): void {
    this.isAuthenticated = status;
    this.userType = userType;
  }
}
