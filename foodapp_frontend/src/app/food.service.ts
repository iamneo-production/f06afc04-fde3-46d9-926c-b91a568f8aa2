import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
<<<<<<< HEAD
  url = 'http://localhost:8080/item';
=======
  url = 'https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/menu-item';
>>>>>>> 10bc20662fe349f08226a0b011e88abd0e338aa3
  constructor(private http:HttpClient){}
  restaurant(){
    return this.http.get(this.url);
  }
}