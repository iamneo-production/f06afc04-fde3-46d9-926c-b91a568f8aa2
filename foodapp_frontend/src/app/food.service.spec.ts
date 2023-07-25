import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:foodapp_frontend/src/app/auth.service.spec.ts
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
=======
import { FoodService } from './food.service';

describe('FoodService', () => {
  let service: FoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodService);
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55:foodapp_frontend/src/app/food.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
