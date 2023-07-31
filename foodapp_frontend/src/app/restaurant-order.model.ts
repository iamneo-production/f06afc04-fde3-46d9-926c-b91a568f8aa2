export interface RestaurantOrder {
    id: number;
    customerId: number;
    menuItemId: number;
    totalCost: number;
    deliveryAddress: string;
    deliveryTime: string; // You might want to parse this to a Date object later
    restaurantId: number;
    status: string;
  }