import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======

>>>>>>> 7a9a5638 (updated the home and search components for home screen)
@Injectable({
  providedIn: 'root'
})
export class FoodService {
<<<<<<< HEAD
  url = 'http://localhost:8080/item';
  constructor(private http:HttpClient){}
  restaurant(){
    return this.http.get(this.url);
  }
}
=======
  url = 'http://localhost:8080/restaurant';
  constructor(private http:HttpClient){}
  restaurant(){
    return this.http.get(this.url);
  }
}
>>>>>>> 7a9a5638 (updated the home and search components for home screen)
