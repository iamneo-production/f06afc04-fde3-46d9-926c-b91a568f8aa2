import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
<<<<<<< HEAD
   private baseURL="http://localhost:8080/customer";
=======
   private baseURL="https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/customer";
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55
  constructor(private http:HttpClient) { }

  getCustomerById(id:number):Observable<Customer> 
  {
     return this.http.get<Customer>(`${this.baseURL}/${id}`);
  }
  

  
  
  updateCustomer(id:number,customer:Customer): any{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post(`${this.baseURL}/updateprofile`,JSON.stringify(customer),{headers : headers});
  }
}
