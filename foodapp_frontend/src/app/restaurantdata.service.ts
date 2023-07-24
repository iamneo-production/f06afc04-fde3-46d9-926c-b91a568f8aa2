<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant.model';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> a7d4add (Update Restaurant)

@Injectable({
  providedIn: 'root'
})
export class RestaurantdataService {
<<<<<<< HEAD
  restaurantId:number = 0;
  
  baseUrl = 'https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io';

  constructor(private http: HttpClient) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/restaurant`);
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.baseUrl}/restaurant/${id}`);
  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/restaurant/updatedetails`, JSON.stringify(restaurant), { headers: headers });
  }

  getRestaurantByName(name: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.baseUrl}/restaurant/name?name=${name}`);
  }

  getRestaurantsByCuisine(cuisineType: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/restaurant/cuisine?cuisineType=${cuisineType}`);
  }
}
=======

  url = 'http://localhost:8080/restaurant';
  constructor(private http:HttpClient){}
  restaurants(){
    return this.http.get(this.url);
  }

  getRestaurantById(id:number):Observable<any>{
    let url = `http://localhost:8080/restaurant/${id}`;
    return this.http.get(url)
  }
}
>>>>>>> a7d4add (Update Restaurant)
