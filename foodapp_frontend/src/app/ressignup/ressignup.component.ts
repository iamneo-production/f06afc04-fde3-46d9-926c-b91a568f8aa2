import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-ressignup',
  templateUrl: './ressignup.component.html',
  styleUrls: ['./ressignup.component.css']
})
export class RessignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  phone_number: string = '';
  deliverytime: string = '';
  minimumordervalue: string = '';
  cuisinetype: string = '';
  imageData: string = '';
  rating: string = '';
  address!:string;

  constructor(private http: HttpClient, private router: Router,  private service:RestaurantService) { }

  register():void {

    if (!this.name || !this.email || !this.password || !this.phone_number || !this.deliverytime || !this.minimumordervalue || !this.cuisinetype || !this.imageData || !this.rating) {
      alert('Please provide all the required details.');
      return; 
    }
   
    const restaurantData = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone_number: this.phone_number,
      deliverytime:this.deliverytime,
      minimumordervalue:this.minimumordervalue,
      cuisinetype:this.cuisinetype,
      rating:this.rating,
      imageData:this.imageData,
      address:this.address
    };

   

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

<<<<<<< HEAD:foodapp_frontend/src/app/ressignup/ressignup.component.ts
    this.http.post('http://localhost:8080/restaurant', restaurantData, { headers, responseType: 'text' }).subscribe(
=======
    this.http.post('https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/admin', customerData, { headers, responseType: 'text' }).subscribe(
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/adminsignup/adminsignup.component.ts
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
