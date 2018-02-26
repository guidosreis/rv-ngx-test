import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DatesSelectionComponent } from './dates-selection/dates-selection.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { DetailsComponent } from './result-item/details/details.component';
import { PriceHistoryComponent } from './result-item/price-history/price-history.component';
import { AsideComponent } from './aside/aside.component';

import { HotelsService } from './services/hotels.service';
import { DatesSelectionService } from './services/dates-selection.service';
import { PriceRangeService } from './services/price-range.service';
import { RateService } from './services/rate.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DatesSelectionComponent,
    ResultListComponent,
    ResultItemComponent,
    DetailsComponent,
    PriceHistoryComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HotelsService,
    DatesSelectionService,
    PriceRangeService,
    RateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
