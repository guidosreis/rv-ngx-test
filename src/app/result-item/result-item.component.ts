import { Component, OnInit, Input } from '@angular/core';

import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() hotel: Hotel;

  priceHistoryVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.priceHistoryVisible = false;
  }

  showPriceHistory() {
    this.priceHistoryVisible = true;
  }

  hidePriceHistory() {
    this.priceHistoryVisible = false;
  }

}
