import { Component, Input, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @ViewChild('history') canvas: ElementRef;
  @Input() hotel: Hotel;

  stars: number[];
  priceHistoryVisible: boolean;
  chartData: number[];
  chartLabels: string[];
  chartColors: Array<any>;
  chartColorsSet: boolean;
  chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 50,
        bottom: 0
      }
    },
    tooltips: {
      backgroundColor: '#474747',
      xAlign: 'center',
      yAlign: 'bottom',
      yPadding: 1,
      callbacks: {
        title: (tooltipItems, data) => `\$${tooltipItems[0].yLabel}`,
        label: (tooltipItem, data) => false
      }
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false,
          beginAtZero: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontFamily: '"Heebo", sans-serif',
          fontColor: '#b5b5b5',
          fontSize: 13
        },
        maxBarThickness: 27,
      }]
    }
  };

  constructor(private changeDetector : ChangeDetectorRef) { }

  ngOnInit() {
    this.priceHistoryVisible = false;
    this.stars = Array.from(Array(this.hotel.rate).keys());
    this.chartData = this.hotel.price_history.map(h => h.value);
    this.chartLabels = this.hotel.price_history.map(h => h.month);
    this.chartColorsSet = false;
  }

  showPriceHistory() {
    this.priceHistoryVisible = true;

    if (!this.chartColorsSet) {
      this.setChartColors();
    }
  }

  setChartColors() {
    this.changeDetector.detectChanges();
    const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    const gradientHover = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(249,129,9,.6)');
    gradient.addColorStop(1, 'rgba(238,110,72,.6)');
    gradientHover.addColorStop(0, 'rgb(249,129,9)');
    gradientHover.addColorStop(1, 'rgb(238,110,72)');

    this.chartColors = [
      {
        'backgroundColor': this.hotel.price_history.map(h => gradient),
        'hoverBackgroundColor': this.hotel.price_history.map(h => gradientHover)
      }
    ];
  }

  hidePriceHistory(event) {
    event.preventDefault();
    this.priceHistoryVisible = false;
  }

}
