import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';
import { Router } from '@angular/router';
import { MenuService } from '../menu/menu.service';
import { Order } from '../Order';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  total = 0;
  discountcount = 0;
  coupanInput = '';
  discountvalue = 0;
  discountedprice = 0;
  deliveryOption:string="pickup";
  deliveryCharge:number=0;
  availablecoupans:string[]=['WELCOME','BIGDAY','FRESHIP']
  
  

  constructor(private cartService: CartService, private router: Router,public menuService:MenuService) {}
  

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.calculateDiscountedPrice();
  }
  
  orders:Order[]=this.menuService.order;
  incrementItemQuantity(item: any): void {
    this.cartService.incrementItemQuantity(item);
    this.discount(this.coupanInput);
  }

  decrementItemQuantity(item: any): void {
    this.cartService.decrementItemQuantity(item);
    // this.total = this.cartService.getTotal();
    this.discount(this.coupanInput);
  }

  removeItem(item:any): void {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.total -= (item.price * item.quantity);
      this.discount(this.coupanInput);
    }
    
  }

  clearCart(): void {
    // this.cartService.clearCart();
    this.orders = [];
    this.total = 0;
    this.calculateDiscountedPrice();
  }

  discount(couponInput: string): void {
    const enteredCoupon = couponInput.trim().toUpperCase();

    if (enteredCoupon === 'WELCOME' && this.discountcount === 0) {
      this.discountvalue = Math.min(0.5 * this.menuService.getTotalAmount(), 200);
      this.calculateDiscountedPrice();
      this.discountcount++;
      alert('Coupon Applied Successfully');
    } else if (enteredCoupon === 'BIGDAY' && this.discountcount===0) {
      this.discountvalue = 100;
      this.calculateDiscountedPrice();
      this.discountcount++;
    } else if (enteredCoupon === 'FREESHIP' && this.discountcount==0 && this.deliveryCharge===50) {
      this.discountvalue = 50;
      this.calculateDiscountedPrice();
      this.discountcount++;
    } else {
      this.discountedprice = this.total;
      this.discountcount = 0;
      this.discountvalue = 0;
    }
  }

  calculateDiscountedPrice(): void {
    if (this.discountcount == 0) {
      this.discountedprice = this.total - this.discountvalue;
    } else {
      this.discountedprice = this.total-this.discountvalue;
    }
  }
  update1():void{
   this.deliveryCharge=50;
   this.discount(this.coupanInput);
  }
  update2():void{
    this.deliveryCharge=0;
  }

  
}

