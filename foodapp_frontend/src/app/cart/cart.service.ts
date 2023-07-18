import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:any = [];
  total = 0;

  constructor() { }

  addToCart(item:any): void {
    let existingItem = this.items.find((x: { name: any; }) => x.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      this.items.push(item);
    }
    this.total += item.price;
    console.log("Item added to cart: ", item);
    console.log("Total after adding item: ", this.total);
  }
  

  getItems() {
    // return a default item to display in the cart
    return [
      { id: 1, name: 'Pizza', price: 9.99, quantity: 0 },
      { id: 2, name: 'Burger', price: 6.99, quantity: 0 },
      { id: 3, name: 'Fries', price: 3.99, quantity: 0 }
    ];
  }

  getTotal(): number {
  console.log("Current total: ", this.total);
  return this.total;
}

  incrementItemQuantity(item:any): void {
    item.quantity++;
    this.total += item.price;
  }

  decrementItemQuantity(item:any): void {
    if(item.quantity>0)
    {item.quantity--;
    this.total -= item.price;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }
  }

  removeItem(item:any): void {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.total -= (item.price * item.quantity);
      
    }
  }

  clearCart(): void {
    this.items = [];
    this.total = 0;
  }
  
}
