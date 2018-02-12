import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor() {
  }

  login({ username, password }: Authenticate): Observable<User> {
    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
