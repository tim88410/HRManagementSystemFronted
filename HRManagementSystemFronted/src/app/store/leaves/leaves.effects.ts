// src/app/store/leaves/leaves.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LeavesService } from '../../leaves/leaves.service';
import { loadLeaves, loadLeavesSuccess, loadLeavesFailure } from './leaves.actions';
import { LeavesApiResponse } from '../../leaves/leaves.model';

@Injectable()
export class LeavesEffects {
  constructor(
    private actions$: Actions,
    private leavesService: LeavesService
  ) {}

  loadLeaves$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadLeaves),
      switchMap(({ page, pageLimit }) =>
        this.leavesService.getLeaves(page, pageLimit).pipe(
          map((res: LeavesApiResponse) =>
            loadLeavesSuccess({
              leaves: res?.ReturnData?.ReturnData?.LeavesInfos ?? []
            })
          ),
          catchError(error => of(loadLeavesFailure({ error })))
        )
      )
    );
  });
}
