import { of } from 'rxjs';
import { AccountService } from './account-service';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  private accountService = inject(AccountService);

  Init() {
    const userStrig = localStorage.getItem('user');
    if (!userStrig) return of(null);
    const user = JSON.parse(userStrig);
    this.accountService.currentUser.set(user);

    return of(null);
  }
}
