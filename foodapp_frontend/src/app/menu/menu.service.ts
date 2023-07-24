import { Injectable } from '@angular/core';
import { Order } from '../Order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItem } from '../FoodItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpService: HttpClient) { }

  apiAvailable:boolean = true;

  order:Order[] = [];

  getMenu() : Observable<FoodItem[]> {
    if(! this.apiAvailable)
      return this.getMenuFromJSON();
      
    return this.httpService.get<FoodItem[]>('http://localhost:8080/menu-item');
  }

  getMenuFromJSON() : Observable<FoodItem[]> {
    return this.httpService.get<FoodItem[]>('/assets/menu/menu.json');
  }
  getTotalAmount(){
    let totalAmount:number = 0;
    this.order.forEach(orderItem => {
      totalAmount += orderItem.price*orderItem.quantity;
    });
    return totalAmount;
  }

  removeItem(orderId: number) {
    const index = this.order.findIndex(orderItem => orderItem.id === orderId);
    if (index !== -1) {
      this.order.splice(index, 1);
    }
  }

}