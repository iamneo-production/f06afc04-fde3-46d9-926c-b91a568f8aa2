import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
<<<<<<< HEAD:foodapp_frontend/src/app/login/login.component.ts

=======
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/restaurantlogin/restaurantlogin.component.ts

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

<<<<<<< HEAD:foodapp_frontend/src/app/login/login.component.ts
  constructor(private http: HttpClient, private router: Router, private authService: AuthService ) {}
=======
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/restaurantlogin/restaurantlogin.component.ts

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

<<<<<<< HEAD:foodapp_frontend/src/app/login/login.component.ts
    this.http.post('http://localhost:8080/login', loginData, { responseType: 'json' }).subscribe(
      (response) => {
        console.log(response);
        if (response) {
          this.authService.setAuthenticated(true);
          this.router.navigate(['profile',response] );
        } 
        },
=======
    this.http.post<any>('https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/restaurantsLogin', loginData, { headers, observe: 'response' }).subscribe(
      (response) => {
        if (response.body?.message === 'Restaurants Login successful') {
          // Login successful, store the email in localStorage
          localStorage.setItem('restaurantEmail', this.email);
          this.authService.setAuthenticated(true, 'restaurant'); // Set the user type as 'restaurant'
          this.router.navigate(['/restaurantdashboard']);
        }
      },
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/restaurantlogin/restaurantlogin.component.ts
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
function subscribe(arg0: (response: any) => void, arg1: (error: HttpErrorResponse) => void) {
  throw new Error('Function not implemented.');
}

