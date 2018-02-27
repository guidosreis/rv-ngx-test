import { Component, OnInit } from '@angular/core';

import { DatesSelectionService } from './services/dates-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedDates: any;

  constructor(private datesService: DatesSelectionService) {}

  ngOnInit() {
    this.datesService.dates
      .subscribe(dates => this.selectedDates = dates);
  }
}
