import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:8080/item';
  constructor(private http:HttpClient){}
  restaurant(){
    return this.http.get(this.url);
  }
}