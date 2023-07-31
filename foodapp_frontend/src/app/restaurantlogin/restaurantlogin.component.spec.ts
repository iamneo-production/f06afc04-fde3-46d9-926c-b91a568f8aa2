import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantloginComponent } from './restaurantlogin.component';

describe('RestaurantloginComponent', () => {
  let component: RestaurantloginComponent;
  let fixture: ComponentFixture<RestaurantloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantloginComponent]
    });
    fixture = TestBed.createComponent(RestaurantloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});