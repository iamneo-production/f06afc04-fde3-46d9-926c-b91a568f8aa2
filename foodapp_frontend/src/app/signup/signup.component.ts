import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
<<<<<<< HEAD:foodapp_frontend/src/app/signup/signup.component.ts
  city: string = '';
  street: string = '';
  state: string = '';
  zipcode: string = '';
  

  
=======
  address: string = '';
  menu_item_id: number =0;
  deliverytime: string = '';
  minimumordervalue: string = '';
  cuisinetype: string = '';
  imageData: string = '';
  rating: string = '';
  

>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/restaurantsignup/restaurantsignup.component.ts

  constructor(private http: HttpClient, private router: Router,  private service:CustomerService) { }

<<<<<<< HEAD:foodapp_frontend/src/app/signup/signup.component.ts
  register():void {

    if (!this.name || !this.email || !this.password || !this.zipcode) {
=======
  register(): void {
    if (!this.name || !this.email || !this.password || !this.address) {
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/restaurantsignup/restaurantsignup.component.ts
      alert('Please provide all the required details.');
      return;
    }
<<<<<<< HEAD:foodapp_frontend/src/app/signup/signup.component.ts
    const addressData = {
      street: this.street,
      city: this.city,
      state: this.state,
      zipCode: this.zipcode
    };
    const customerData = {
      name: this.name,
      email: this.email,
      password: this.password,
      addressId: addressData
    };

   

=======
  
    const restaurantData = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      menu_item_id: this.menu_item_id ,
      deliverytime:this.deliverytime,
      minimumordervalue:this.minimumordervalue,
      cuisinetype:this.cuisinetype,
      rating:this.rating,
      imageData:this.imageData,// Assign the value of menu_item_id
    };
  
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/restaurantsignup/restaurantsignup.component.ts
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  
    this.http.post('https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/restaurant', restaurantData, { headers, responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response);
        if (response.includes('created') || response.includes('Restaurant created')) {
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


