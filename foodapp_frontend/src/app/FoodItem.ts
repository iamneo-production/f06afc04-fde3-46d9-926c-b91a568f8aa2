export class FoodItem {
    id:number;
    name:string;
    description:string;
    imageUrl:string;
    tags:string;
    price:number;

    constructor(id:number, name:string, description:string, tags:string, price:number, imageUrl:string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}