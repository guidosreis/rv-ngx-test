import { Component, OnInit } from '@angular/core';

import { PriceRangeService } from '../services/price-range.service';
import { RateService } from '../services/rate.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  priceRange: Array<number>;
  rate: number;
  minRange: number;
  maxRange: number;

  constructor(
    private priceRangeService: PriceRangeService,
    private rateService: RateService
  ) { }

  ngOnInit() {
    this.minRange = 0;
    this.maxRange = 600;
    this.priceRange = [this.minRange, this.maxRange];
  }

  onPriceRangeChange(priceRange) {
    let data = {
      min: priceRange[0],
      max: priceRange[1]
    };

    this.priceRangeService.set(data);
  }

  onRateChange(rate) {
    this.rateService.set(rate);
  }

}
