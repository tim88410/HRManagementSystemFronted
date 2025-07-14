// src/app/store/leaves/leaves.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadLeaves, loadLeavesSuccess, loadLeavesFailure } from './leaves.actions';
import { Leaves } from '../../leaves/leaves.model';

export interface LeavesState {
  leaves: Leaves[];
  isLoading: boolean;
  error: any;
}

export const initialState: LeavesState = {
  leaves: [],
  isLoading: false,
  error: null
};

export const leavesReducer = createReducer(
  initialState,
  on(loadLeaves, state => ({ ...state, isLoading: true })),
  on(loadLeavesSuccess, (state, { leaves }) => ({
    ...state,
    leaves,
    isLoading: false
  })),
  on(loadLeavesFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  }))
);
