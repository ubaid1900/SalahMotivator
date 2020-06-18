import { Injectable } from '@angular/core';
import { RentableAssets } from './record-payment/models/RentableAssets';

@Injectable({
  providedIn: 'root'
})
export class PaymentTargetsService {
  targets: RentableAssets[] = [{ id: 1, name: 'GF 1', rent: 10, vacant: false }];

  constructor() { }

  getTargets() {
    return this.targets;
  }

}

