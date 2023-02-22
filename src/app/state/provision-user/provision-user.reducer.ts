import { createReducer, on } from '@ngrx/store';
import { saveProvisionId } from './provision-user.actions';

export interface ProvisionState {
  id: any;
}

export const initialState = {
  id: '',
};

export const provisionReducer = createReducer(
  initialState,
  on(saveProvisionId, (state) => state)
);
