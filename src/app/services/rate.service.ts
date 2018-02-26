import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RateService {
  rate = new BehaviorSubject<number>(null);

  constructor() { }

  set(rate) {
    this.rate.next(rate);
  }

}
