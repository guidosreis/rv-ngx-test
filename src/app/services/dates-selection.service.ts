import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatesSelectionService {
  dates = new BehaviorSubject<any>(null);

  constructor() { }

  set(dates) {
    this.dates.next(dates);
  }

}
