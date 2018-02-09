import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromApp from '../reducers/app.reducer';

export const getOnlineStatus = createSelector(fromFeature.getAppState, fromApp.getOnlineStatus);
