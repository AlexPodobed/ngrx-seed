import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';


import { environment } from '../../environments/environment';
import { reducers, effects, CustomSerializer } from './store';

import { components } from './components';
import { services } from './services';

export const metaReducers: MetaReducer<any>[] = environment.dev
  ? [storeFreeze]
  : [];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    environment.dev ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    ...services,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule {
}
