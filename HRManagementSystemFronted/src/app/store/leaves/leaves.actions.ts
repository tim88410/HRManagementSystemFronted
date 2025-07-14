// src/app/store/leaves/leaves.actions.ts
import { createAction, props } from '@ngrx/store';
import { Leaves } from '../../leaves/leaves.model';

export const loadLeaves = createAction(
  '[Leaves] Load Leaves',
  props<{ page: number; pageLimit: number }>()
);

export const loadLeavesSuccess = createAction(
  '[Leaves] Load Leaves Success',
  props<{ leaves: Leaves[] }>()
);

export const loadLeavesFailure = createAction(
  '[Leaves] Load Leaves Failure',
  props<{ error: any }>()
);
