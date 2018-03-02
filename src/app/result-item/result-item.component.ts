import { Component, Input, OnInit } from '@angular/core';

import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() hotel: Hotel;

  stars: number[];
  priceHistoryVisible: boolean;

  constructor() {
    this.priceHistoryVisible = false;
  }

  ngOnInit() {
    this.stars = Array.from(Array(this.hotel.rate).keys());
  }

  showPriceHistory() {
    this.priceHistoryVisible = true;
  }

  hidePriceHistory() {
    this.priceHistoryVisible = false;
  }

}
