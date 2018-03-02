import { Component } from '@angular/core';

import { DatesSelectionService } from '../services/dates-selection.service';

@Component({
  selector: 'app-dates-selection',
  templateUrl: './dates-selection.component.html',
  styleUrls: ['./dates-selection.component.scss']
})
export class DatesSelectionComponent {
  datesRange: Array<any>;

  constructor(private datesService: DatesSelectionService) { }

  selectDates() {
    this.datesService.set(this.datesRange);
  }

}
