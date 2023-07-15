import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {
  orderId!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('order.Id') || '';
  }

  cancelOrder(): void {
    // Implement cancel order logic
    // After canceling the order, you can navigate to the Order Tracking screen
    this.router.navigate(['/order-tracking', this.orderId]);
  }
}
