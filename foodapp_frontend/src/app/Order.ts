import { FoodItem } from "./FoodItem";

export class Order extends FoodItem {
    quantity:number;
    restaurantId:number;

    constructor(id:number, name:string, description:string, tags:string, price:number, imageUrl:string, quantity:number,restaurantId?:any) {
        super(id, name, description, tags, price, imageUrl);
        this.quantity = quantity;
        this.restaurantId=restaurantId;
    }
}