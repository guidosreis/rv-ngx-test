import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Hotel } from '../models/hotel.model';
import { HotelsService } from '../services/hotels.service';
import { DatesSelectionService } from '../services/dates-selection.service';
import { PriceRangeService } from '../services/price-range.service';
import { RateService } from '../services/rate.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit, OnDestroy {
  datesSub: Subscription;
  priceRangeSub: Subscription;
  rateSub: Subscription;

  dates: any;
  priceRange: any;
  rate: number;
  hotels: Hotel[];

  constructor(
    private hotelsService: HotelsService,
    private datesService: DatesSelectionService,
    private priceRangeService: PriceRangeService,
    private rateService: RateService
  ) { }

  ngOnInit() {
    this.datesSub = this.datesService.dates
      .subscribe(dates => {
        this.dates = {...dates};

        this.getHotels();
      });

    this.priceRangeSub = this.priceRangeService.priceRange
      .subscribe(priceRange => {
        this.priceRangeSub = {...priceRange};

        this.getHotels();
      });

    this.rateSub = this.rateService.rate
      .subscribe(rate => {
        this.rate = rate;

        this.getHotels();
      });
  }

  getHotels() {
    this.hotelsService.getHotels()
      .subscribe(hotels => {
        this.hotels = hotels.filter(hotel => {
          let aux = false;

          if (this.priceRange) {
            let {min, max} = this.priceRange;
            aux = (hotel.price >= min && hotel.price <= max);
          }

          if (this.rate) {
            aux = hotel.rate !== this.rate;
          }

          if (aux) return hotel;
        });
    })
  }

  ngOnDestroy() {
    this.datesSub.unsubscribe();
    this.priceRangeSub.unsubscribe();
    this.rateSub.unsubscribe();
  }

}
