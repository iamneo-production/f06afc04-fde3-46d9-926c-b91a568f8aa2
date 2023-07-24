import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
<<<<<<< HEAD
  url = 'https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/menu-item';
=======
  url = 'http://localhost:8080/item';
>>>>>>> a7d4add (Update Restaurant)
  constructor(private http:HttpClient){}
  restaurant(){
    return this.http.get(this.url);
  }
}