import { createSelector } from '@ngrx/store';
import { ProvisionState } from './provision-user.reducer';
import { AppState } from '../app.state';

export const provisionId = (state: AppState) => state.provisionId;
export const showProvisionId = createSelector(
  provisionId,
  (state: ProvisionState) => state.id
);
