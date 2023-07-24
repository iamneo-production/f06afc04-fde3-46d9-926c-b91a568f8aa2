import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { RestaurantdataService } from './restaurantdata.service';

describe('RestaurantdataService', () => {
  let service: RestaurantdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantdataService);
=======
import { RestautantdataService } from './restaurantdata.service';

describe('RestautantdataService', () => {
  let service: RestautantdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestautantdataService);
>>>>>>> a7d4add (Update Restaurant)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});