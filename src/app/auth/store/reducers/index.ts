import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../../core/store/reducers';
import * as fromAuth from './auth.reducer';

export interface AuthState {
  status: fromAuth.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  status: fromAuth.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectAuthStatusState = createSelector(selectAuthState, (state: AuthState) => state.status);
