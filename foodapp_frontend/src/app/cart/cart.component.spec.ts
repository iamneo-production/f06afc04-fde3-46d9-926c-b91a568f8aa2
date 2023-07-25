import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:foodapp_frontend/src/app/profile/profile.component.spec.ts
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent]
    });
    fixture = TestBed.createComponent(ProfileComponent);
=======
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent]
    });
    fixture = TestBed.createComponent(CartComponent);
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/cart/cart.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
