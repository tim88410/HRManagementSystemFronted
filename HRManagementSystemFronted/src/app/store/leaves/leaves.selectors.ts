// src/app/store/leaves/leaves.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LeavesState } from './leaves.reducer';

export const selectLeavesState = createFeatureSelector<LeavesState>('leaves');

export const selectLeaves = createSelector(
  selectLeavesState,
  state => state.leaves
);

export const selectLeavesLoading = createSelector(
  selectLeavesState,
  state => state.isLoading
);
