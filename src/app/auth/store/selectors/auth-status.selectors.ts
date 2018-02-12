import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getLoggedIn = createSelector(fromFeature.selectAuthStatusState, fromAuth.getLoggedIn);
export const getUser = createSelector(fromFeature.selectAuthStatusState, fromAuth.getUser);
