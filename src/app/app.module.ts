import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// libs
import { NouisliderModule } from 'ng2-nouislider';
import { BarRatingModule } from "ngx-bar-rating";
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS} from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { MomentModule } from 'angular2-moment';

// components
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DatesSelectionComponent } from './dates-selection/dates-selection.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { AsideComponent } from './aside/aside.component';

// services
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
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NouisliderModule,
    BarRatingModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
    MomentModule
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
