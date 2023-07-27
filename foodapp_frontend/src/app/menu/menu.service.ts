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

  order:Order[] = [];

  getMenu() : Observable<FoodItem[]> {
    return this.httpService.get<FoodItem[]>('https://8080-eaeeecbfecacfcdbceaeaadbdbabf.project.examly.io/menu-item');
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