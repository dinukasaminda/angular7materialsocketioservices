import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MySnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  public showSnackBarListern(text: string, action: string, duration: number): Observable<any> {
    const obsrvbl = new Observable((observer) => {
      let snackBarRef = this.snackBar.open(text, action, { duration: duration });
      snackBarRef.onAction().subscribe(() => {
        observer.next(true); observer.complete();

      });
      setTimeout(() => { observer.next(false); observer.complete(); }, duration);
    });
    return obsrvbl;
  }
  public showSnackBarShow(text: string, action: string, duration: number): void {
    this.snackBar.open(text, action, { duration: duration });

  }


}