import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Hotel } from '../models/hotel.model';

@Injectable()
export class HotelsService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('assets/json/hotels.json')
      .pipe(
        map(res => res['hotels'])
      );
  }

}
