import { Action } from '@ngrx/store';

export const SET_ONLINE_STATUS = '[App] Set online status';

export class SetOnlineStatus implements Action {
  readonly type = SET_ONLINE_STATUS;

  constructor(public payload: boolean) {
  }
}

export type AppActions = SetOnlineStatus;
