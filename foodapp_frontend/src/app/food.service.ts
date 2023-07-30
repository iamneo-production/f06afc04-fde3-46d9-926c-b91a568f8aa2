import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'https://8080-acebbedadecfacfcdbccbacbfccbbebfcae.project.examly.io/menu-item';
  constructor(private http:HttpClient){}
  restaurant(){
    return this.http.get(this.url);
  }
}