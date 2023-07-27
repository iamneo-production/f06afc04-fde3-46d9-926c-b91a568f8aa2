import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantdataService {
  restaurantId:number = 0;
  
  baseUrl = 'https://8080-eaeeecbfecacfcdbceaeaadbdbabf.project.examly.io/';

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
