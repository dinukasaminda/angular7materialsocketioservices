import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  public countDownInterval: Observable<number> = null;
  constructor() {
    this.countDownInterval = interval(1000).pipe(
      map(v => {
        return v;
      })
    );
  }

}
