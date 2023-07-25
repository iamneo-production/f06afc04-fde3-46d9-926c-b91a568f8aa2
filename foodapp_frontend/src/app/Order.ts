import { FoodItem } from "./FoodItem";

export class Order extends FoodItem {
    quantity:number;

    constructor(id:number, name:string, description:string, tags:string, price:number, imageUrl:string, quantity:number) {
        super(id, name, description, tags, price, imageUrl);
        this.quantity = quantity;
    }
}