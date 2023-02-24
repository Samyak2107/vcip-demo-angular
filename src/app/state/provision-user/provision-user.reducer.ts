import { createReducer, on } from '@ngrx/store';
import { saveProvisionId, toggleOnlineStatus } from './provision-user.actions';

export interface ProvisionState {
  id: any;
}

export const initialState = {
  id: '',
  agentOnline: false,
};

export const provisionReducer = createReducer(
  initialState,
  on(saveProvisionId, (state, { content }) => ({ ...state, id: content })),
  on(toggleOnlineStatus, (state, { content }) => ({
    ...state,
    agentOnline: content,
  }))
);
