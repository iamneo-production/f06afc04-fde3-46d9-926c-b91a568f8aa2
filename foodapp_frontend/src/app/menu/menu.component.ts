import { Component } from '@angular/core';
import { FoodItem } from '../menuService/foodItem';
import { GetMenuService } from '../menuService/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private menuService:GetMenuService) { }
  
  menu:FoodItem[] = this.menuService.getMenu();
  filteredMenu:FoodItem[] = this.menu;

  order:any = {};
  totalItems:number = 0;
  totalAmount:number = 0;

  zeroItems() {
    if(this.totalItems==0)
      return true;
    return false;
  }

  oneItem() {
    if(this.totalItems==1)
      return true;
    return false;
  }

  addToCart(event:any) {
    let foodId:number = event.target.value;
    this.order[foodId] = 1;
    
    this.totalItems++;
    event.target.parentNode.style.display = "none";
    (<HTMLDivElement>document.querySelector("#addToCartBtns-"+foodId)).style.display = "block";

    this.totalAmount += this.getPrice(foodId);
  }

  increase(event:any) {
    let foodId:number = event.target.value;
    this.order[foodId] += 1;

    this.totalAmount += this.getPrice(foodId);
  }

  decrease(event:any) {
    let foodId:number = event.target.value;

    if(this.order[foodId] == 1) {
      this.totalItems--;
      event.target.parentNode.style.display = "none";
      (<HTMLDivElement>document.querySelector("#addToCart-"+foodId)).style.display = "block";
    }
    else
      this.order[foodId] -= 1;

    this.totalAmount -= this.getPrice(foodId);
  }

  getPrice(foodId:number) {
    for(let i=0;i<this.menu.length;i++) {
      if(foodId == this.menu[i].id)
        return this.menu[i].price;
    }
    console.log("Price not found for food with id "+foodId);
    return 0;
  }

  searchMenu(event:any) {
    let searchTerm = event.target.value;
    
    if(!searchTerm)
      this.filteredMenu = this.menu;
    else {
      this.filteredMenu = this.menu.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  }
}
