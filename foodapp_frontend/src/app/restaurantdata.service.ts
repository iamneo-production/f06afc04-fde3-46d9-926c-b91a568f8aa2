import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantdataService {

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
