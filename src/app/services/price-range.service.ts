import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PriceRangeService {
  priceRange = new BehaviorSubject<any>(null);

  constructor() { }

  set(priceRange) {
    this.priceRange.next(priceRange);
  }

}
