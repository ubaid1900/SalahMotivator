import { TestBed } from '@angular/core/testing';

import { PaymentTargetsService } from './payment-targets.service';

describe('PaymentTargetsService', () => {
  let service: PaymentTargetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentTargetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
