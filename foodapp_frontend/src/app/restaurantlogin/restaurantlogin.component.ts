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

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  login(): void {
    if (!this.email || !this.password) {
      alert('Please provide all the required details.');
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any>('https://8080-eaeeecbfecacfcdbceaeaadbdbabf.project.examly.io/restaurantsLogin', loginData, { headers, observe: 'response' }).subscribe(
      (response) => {
        if (response.body?.message === 'Restaurants Login successful') {
          // Login successful, store the email in localStorage
          localStorage.setItem('restaurantEmail', this.email);
          this.authService.setAuthenticated(true, 'restaurant'); // Set the user type as 'restaurant'
          this.router.navigate(['/restaurantdashboard']);
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
