import { TestBed } from '@angular/core/testing';

import { SheredDataService } from './shered-data.service';

describe('SheredDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SheredDataService = TestBed.get(SheredDataService);
    expect(service).toBeTruthy();
  });
});
