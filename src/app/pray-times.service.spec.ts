import { TestBed } from '@angular/core/testing';

import { PrayTimesService } from './pray-times.service';

describe('PrayTimesService', () => {
  let service: PrayTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrayTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
