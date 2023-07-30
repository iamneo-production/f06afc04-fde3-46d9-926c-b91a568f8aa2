import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { FoodItem } from '../FoodItem';
import { Order } from '../Order';
import { RestaurantdataService } from '../restaurantdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private menuService:MenuService, private restaurantService:RestaurantdataService) { }

  message:string = "Fetching menu";
  apiAvailable:boolean = false;
  menu:FoodItem[] = [];
  filteredMenu:FoodItem[] = [];
  restaurant:any = {name: "", id: 0};

  ngOnInit() {
    this.getRestaurantDetails(this.restaurantService.restaurantId);

    this.menuService.getMenu()
      .subscribe({
        next: data => {
          this.apiAvailable = true;
          this.menu = data;
          this.filteredMenu = this.menu;
          },
        error: error => {          
          console.error(error);
          this.message = "HTTP Error | Status: "+error.status;
          }
        });
  }

  order:Order[] = this.menuService.order;

  addToCart(event:any) {
    let foodId:number = event.target.value;
    let foodItem:FoodItem = this.menu.find(foodItem => foodItem.id == foodId) as FoodItem;
    this.order.push(new Order(foodItem.id, foodItem.name, foodItem.description, foodItem.tags, foodItem.price, foodItem.imageUrl, 1));
  }

  increaseQty(event:any) {
    let foodId:number = event.target.value;
    let orderItem:Order = this.order.find(orderItem => orderItem.id == foodId) as Order;
    orderItem.quantity++;
  }

  decreaseQty(event:any) {
    let foodId:number = event.target.value;
    let orderItem:Order = this.order.find(orderItem => orderItem.id == foodId) as Order;
    orderItem.quantity--;

    if(orderItem.quantity == 0) {
      let deleteIndex:number = this.order.findIndex(orderItem => orderItem.id == foodId);
      this.order.splice(deleteIndex, 1);
    }
  }

  searchMenu(event:any) {
    let searchTerm = event.target.value;
    
    if(!searchTerm)
      this.filteredMenu = this.menu;
    else {
      this.filteredMenu = this.menu.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  }

  getTotalAmount() {
    return this.menuService.getTotalAmount();
    
  }

  getQtyById(foodId:number) {
    let orderItem:Order = this.order.find(orderItem => orderItem.id == foodId) as Order;
    if(orderItem == undefined)
      return 0;
    return orderItem.quantity;
  }

  getRestaurantDetails(id:number){
    this.restaurantService.getRestaurantById(id)
      .subscribe(data => {
        this.restaurant = data;
      });
  }
}