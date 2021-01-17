import { createReducer, on } from '@ngrx/store';
import { clean, update } from '../actions/breeds.actions';

export const initialState = [];

const _breedsReducer = createReducer(
  initialState,
  on(update, (state, action) => action.list),
  on(clean, (state) => [])
);

export function breedsReducer(state, action) {
  return _breedsReducer(state, action);
}
