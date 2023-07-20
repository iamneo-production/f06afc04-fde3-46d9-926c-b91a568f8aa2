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
    return this.httpService.get<FoodItem[]>('/assets/menu/menu.json');
  }

}
