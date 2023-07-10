import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsignupComponent } from './restaurantsignup.component';

describe('RestaurantsignupComponent', () => {
  let component: RestaurantsignupComponent;
  let fixture: ComponentFixture<RestaurantsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsignupComponent]
    });
    fixture = TestBed.createComponent(RestaurantsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
