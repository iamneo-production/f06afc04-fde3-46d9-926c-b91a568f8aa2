import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  restaurant:any;
  constructor(private food:FoodService){
    this.food.restaurant().subscribe((data: any)=>{
      console.log("data",data)
      this.restaurant=data;
    })
  }
}