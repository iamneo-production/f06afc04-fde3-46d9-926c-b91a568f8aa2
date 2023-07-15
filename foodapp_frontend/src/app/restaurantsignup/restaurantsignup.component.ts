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
  phone: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {

    if (!this.name || !this.email || !this.password || !this.phone) {
      alert('Please provide all the required details.');
      return; 
    }
    const restaurantData = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('http://localhost:8080/restaurants/signup', restaurantData, { headers, responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response); 
        if (response.includes('Restaurant Created')) {
          alert('Restaurant registration successful!');
        } else if (response.includes('Email is already registered')) {
          alert('Email is already registered. Please use a different email.');
        } else {
          alert('Restaurant registration failed. Please try again later.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
