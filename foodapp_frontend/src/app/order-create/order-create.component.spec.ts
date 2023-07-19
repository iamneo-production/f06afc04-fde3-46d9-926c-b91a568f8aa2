import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCreateComponent } from './order-create.component';

describe('OrderCreateComponent', () => {
  let component: OrderCreateComponent;
  let fixture: ComponentFixture<OrderCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCreateComponent]
    });
    fixture = TestBed.createComponent(OrderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
