import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
<<<<<<< HEAD

  setAuthenticated(status: boolean): void {
    this.isAuthenticated = status;
=======
  userType: string = '';

  setAuthenticated(status: boolean, userType: string): void {
    this.isAuthenticated = status;
    this.userType = userType;
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55
  }
}
