import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { RestautantdataService } from './restaurantdata.service';

describe('RestautantdataService', () => {
  let service: RestautantdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestautantdataService);
=======
import { RestaurantdataService } from './restaurantdata.service';

describe('RestaurantdataService', () => {
  let service: RestaurantdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantdataService);
>>>>>>> 10bc20662fe349f08226a0b011e88abd0e338aa3
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
