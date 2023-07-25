import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-restaurantlogin',
  templateUrl: './restaurantlogin.component.html',
  styleUrls: ['./restaurantlogin.component.css']
})
export class RestaurantloginComponent {

  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router,     private authService: AuthService ) {}

  login(): void {
    if ( !this.email || !this.password ) {
      alert('Please provide all the required details.');
      return; 
    }
    
    const loginData = { 
      email: this.email, 
      password: this.password 
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('http://localhost:8080/restaurant', loginData, { headers, observe: 'response' }).subscribe(
      (response) => {
        if (response.status === 200) {
          // Login successful, redirect to the Home component
          this.authService.setAuthenticated(true, 'restaurant'); // Set the user type as 'admin'

          this.router.navigate(['/restaurantpanel']);
        } 
        },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Show an alert for invalid credentials
          alert('Invalid credentials. Please try again.');
        } else {
          console.log(error);
        }
      }
    );
  }
}
