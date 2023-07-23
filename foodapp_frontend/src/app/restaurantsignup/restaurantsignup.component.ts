import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantsignup',
  templateUrl: './restaurantsignup.component.html',
  styleUrls: ['./restaurantsignup.component.css']
})
export class RestaurantsignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  phone_number: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {

    if (!this.name || !this.email || !this.password || !this.phone_number) {
      alert('Please provide all the required details.');
      return; 
    }
    const customerData = {
      restaurantname: this.name,
      email: this.email,
      password: this.password,
      phone_number: this.phone_number
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('http://localhost:8080/restaurantsSignup', customerData, { headers, responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response); 
        if (response.includes('created') || response.includes('Customer created')) {
          alert('Registration successful!');
        } else if (response.includes('already registered')) {
          alert('Email is already registered. Please use a different email.');
        } else {
          alert('Registration failed. Please try again later.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
