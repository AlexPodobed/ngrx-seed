import { Routes } from '@angular/router';
import { RegisterContainerComponent, LoginContainerComponent } from './containers';

export const ROUTES: Routes = [
  { path: 'login', component: LoginContainerComponent },
  { path: 'register', component: RegisterContainerComponent }
];
