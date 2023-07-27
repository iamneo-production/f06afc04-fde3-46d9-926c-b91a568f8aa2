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
  couponApplied:boolean=false;
  
  

  constructor(private cartService: CartService, private router: Router,public menuService:MenuService) {}
  

  ngOnInit() {
    // this.items = this.cartService.getItems();
    // this.total = this.cartService.getTotal();

    this.calculateDiscountedPrice();
  }
  
  orders:Order[]=this.menuService.order;

  incrementItemQuantity(item: any): void {
    this.cartService.incrementItemQuantity(item);
    this.calculateDiscountedPrice();
  }

  decrementItemQuantity(item: any): void {
    if (item.quantity > 1) {
        this.cartService.decrementItemQuantity(item);
        // this.total = this.cartService.getTotal();
        this.calculateDiscountedPrice();
    }
}


  removeItem(item:any): void {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.total -= (item.price * item.quantity);
      this.calculateDiscountedPrice();
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
  
    if (enteredCoupon === 'WELCOME' && !this.couponApplied) {
      this.discountvalue = Math.min(0.5 * this.menuService.getTotalAmount(), 200);
      this.couponApplied = true;
      this.calculateDiscountedPrice();
    } else if (enteredCoupon === 'BIGDAY' && !this.couponApplied) {
      this.discountvalue = Math.min(100, this.menuService.getTotalAmount());
      this.couponApplied = true;
      this.calculateDiscountedPrice();
    } else if (enteredCoupon === 'FREESHIP' && !this.couponApplied && this.deliveryCharge === 50) {
      this.discountvalue = 50;
      this.couponApplied = true;
      this.calculateDiscountedPrice();
    } else {
      this.discountedprice = this.total;
      this.couponApplied = false;
      this.discountvalue = 0;
    }
  }
  
  

  calculateDiscountedPrice(): void {
    if(this.couponApplied==true)
    {this.discountvalue = Math.min(0.5 * this.menuService.getTotalAmount(), 200);
    this.discountedprice = this.total - this.discountvalue;}
  
  }
  update1():void{
   this.deliveryCharge=50;
   
  }
  update2():void{
    this.deliveryCharge=0;
  }

  finalAmount():number{
    return this.cartService.finalAmount(this.discountvalue,this.deliveryCharge);

  }

  
}