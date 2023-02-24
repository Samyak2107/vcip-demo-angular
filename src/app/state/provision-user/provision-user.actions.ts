import { createAction, props } from '@ngrx/store';

export const saveProvisionId = createAction(
  '[Initiate Call] Save ProvisionId',
  props<{ content: any }>()
);

export const toggleOnlineStatus = createAction(
  '[Navbar Component] Toggle Status',
  props<{ content: any }>()
);
