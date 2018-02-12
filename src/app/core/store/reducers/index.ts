import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../../environments/environment';
import * as fromRouter from './router.reducer';
import * as fromApp from './app.reducer';

export interface State {
  routerReducer: RouterReducerState<fromRouter.RouterStateUrl>;
  app: fromApp.AppState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: routerReducer,
  app: fromApp.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.dev
  ? [storeFreeze]
  : [];

export class CustomSerializer implements RouterStateSerializer<fromRouter.RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): fromRouter.RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, params, queryParams };
  }
}

export const getRouterState = createFeatureSelector<RouterReducerState<fromRouter.RouterStateUrl>>('routerReducer');
export const getAppState = createFeatureSelector<fromApp.AppState>('app');

export * from './router.reducer';
