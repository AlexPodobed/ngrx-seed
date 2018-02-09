import * as fromApp from '../actions/app.actions';

export interface AppState {
  online: boolean;
}

export const initialState: AppState = {
  online: true
};

export function reducer(state = initialState, action: fromApp.AppActions): AppState {
  switch (action.type) {
    case fromApp.SET_ONLINE_STATUS: {
      const online = action.payload;
      return { ...state, online };
    }
  }
  return state;
}

export const getOnlineStatus = (state: AppState) => state.online;
