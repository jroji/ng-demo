import { Breed } from '@core/models/breed.models';
import { createAction, props } from '@ngrx/store';

export const BreedActions = {
  UPDATE: '[Breeds] Update',
  REQUEST: '[Breeds] Request',
  CLEAN: '[Breeds] Clean',
};

export const update = createAction(
  BreedActions.UPDATE,
  props<{ list: Breed[] }>()
);
export const clean = createAction(BreedActions.CLEAN);
export const request = createAction(BreedActions.REQUEST);
