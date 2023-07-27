import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantdataService {

  url = 'https://8080-acebbedadecfacfcdbccbacbfccbbebfcae.project.examly.io/restaurant';
  constructor(private http:HttpClient){}
  restaurants(){
    return this.http.get(this.url);
  }

  getRestaurantById(id:number):Observable<any>{
    let url = `https://8080-acebbedadecfacfcdbccbacbfccbbebfcae.project.examly.io/${id}`;
    return this.http.get(url)
  }
}
