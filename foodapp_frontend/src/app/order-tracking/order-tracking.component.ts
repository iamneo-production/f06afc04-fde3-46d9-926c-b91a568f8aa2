import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent {
  order = {
    id: 34760,
    status: 'Preparing',
    deliveryTime: '2:30 PM',
    deliveryPerson: {
      name: 'Jhon',
      photo: 'https://via.placeholder.com/150',
      location: '1-135A, Ramayapalem, Near Kondepi, Ongole',

    }
}
}

