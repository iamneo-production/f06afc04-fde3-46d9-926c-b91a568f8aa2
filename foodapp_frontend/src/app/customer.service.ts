import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   private baseURL="https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/customer";
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
