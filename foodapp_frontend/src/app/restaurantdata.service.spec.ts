import { TestBed } from '@angular/core/testing';

import { RestautantdataService } from './restaurantdata.service';

describe('RestautantdataService', () => {
  let service: RestautantdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestautantdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
