import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AuthService } from './services/auth.service';
import { reducers, AuthEffects } from './store';
import { containers } from './containers';
import { ROUTES } from './auth.routes';
import { httpInterceptors } from './interceptors';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...containers],
  exports: [...containers]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [
        ...httpInterceptors,
        AuthService
      ]
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class RootAuthModule {
}
