export class FoodItem {
    id:number;
    name:string;
    imageUrl:string;
    tags:string[];
    price:number;

    constructor(id:number, name:string, imageUrl:string, tags:string[], price:number) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.tags = tags;
        this.price = price;
    }
}