import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DatesSelectionComponent } from './dates-selection/dates-selection.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { DetailsComponent } from './result-item/details/details.component';
import { PriceHistoryComponent } from './result-item/price-history/price-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DatesSelectionComponent,
    ResultListComponent,
    ResultItemComponent,
    DetailsComponent,
    PriceHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
