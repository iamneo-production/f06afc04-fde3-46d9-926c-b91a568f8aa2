import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantdataService {

  url = 'https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/restaurant';
  constructor(private http:HttpClient){}
  restaurants(){
    return this.http.get(this.url);
  }

  getRestaurantById(id:number):Observable<any>{
    let url = 'https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/restaurant/${id}';
    return this.http.get(url)
  }
  updateRestaurant(id:number,restaurant:Restaurant): any{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post(`${this.url}/updatedetails`,JSON.stringify(restaurant),{headers : headers});
  }
}