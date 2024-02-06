import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private messageSubject:BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  message$ = this.messageSubject.asObservable();

  constructor() { }

  showMessage(message: string) {
    this.messageSubject.next(message);
    setTimeout(() => {
      this.messageSubject.next(undefined);
    }, 3000);
  }
}
