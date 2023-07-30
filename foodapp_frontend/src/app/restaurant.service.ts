import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseURL="https://8080-baadfdbadacdfeacfcdbceaeaadbdbabf.project.examly.io/restaurant";
  constructor(private http:HttpClient) { }

  getRestaurantById(id:number):Observable<Restaurant> 
  {
     return this.http.get<Restaurant>(`${this.baseURL}/${id}`);
  }

  updateRestaurant(id:number,restaurant:Restaurant): any{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post(`${this.baseURL}/updatedetails`,JSON.stringify(restaurant),{headers : headers});
  }
}
