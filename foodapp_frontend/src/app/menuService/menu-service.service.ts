import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMenuService {

  constructor() { }

  getMenu() {
    return [
    {
      id: 1,
      name: 'Vegan Salad',
      imageUrl: '/assets/menu/01.jpg',
      tags: ['Veg', "Chef's special"],
      price: 200
    },
    {
      id: 2,
      name: 'Pizza',
      imageUrl: '/assets/menu/02.jpg',
      tags: ['Veg'],
      price: 300
    },
    {
      id: 3,
      name: 'Baked fish',
      imageUrl: '/assets/menu/03.jpg',
      tags: ['Non-Veg'],
      price: 600
    },
    {
      id: 4,
      name: 'Cheese Pasta',
      imageUrl: '/assets/menu/04.jpg',
      tags: ['Veg'],
      price: 250
    },
    {
      id: 5,
      name: 'Meatball',
      imageUrl: '/assets/menu/05.jpg',
      tags: ['Non-Veg'],
      price: 700
    },
    {
      id: 6,
      name: 'Berry French Toast',
      imageUrl: '/assets/menu/06.jpg',
      tags: ['Veg'],
      price: 150
    },
    {
      id: 7,
      name: 'Vegetable Salad',
      imageUrl: '/assets/menu/07.jpg',
      tags: ['Veg'],
      price: 100
    },
    {
      id: 8,
      name: 'Dumpling',
      imageUrl: '/assets/menu/08.jpg',
      tags: ['Veg'],
      price: 100
    }
    ];
  }

}
