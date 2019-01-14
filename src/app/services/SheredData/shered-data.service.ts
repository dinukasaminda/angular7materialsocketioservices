import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { AppUser } from 'src/app/models/AppUser';
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class SheredDataService {
  constructor() { }

  private MessageSource = new BehaviorSubject<AppUser>(new AppUser());
  currentMessage = this.MessageSource.asObservable();
  changeMessage(message: AppUser) {
    this.MessageSource.next(message);
  }

}