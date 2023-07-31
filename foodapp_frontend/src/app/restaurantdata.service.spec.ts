import { TestBed } from '@angular/core/testing';

import { RestaurantdataService } from './restaurantdata.service';

describe('RestaurantdataService', () => {
  let service: RestaurantdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});