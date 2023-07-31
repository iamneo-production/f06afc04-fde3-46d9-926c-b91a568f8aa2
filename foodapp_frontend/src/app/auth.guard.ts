import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated && this.authService.userType === 'user') {
      return true;
    } else {
      this.router.navigate(['userlogin']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated && this.authService.userType === 'restaurant') {
      return true;
    } else {
      this.router.navigate(['restaurantlogin']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated && this.authService.userType === 'admin') {
      return true;
    } else {
      this.router.navigate(['adminlogin']);
      return false;
    }
  }
}