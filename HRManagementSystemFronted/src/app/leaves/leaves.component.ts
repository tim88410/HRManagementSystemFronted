import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil, of } from 'rxjs';
import { LeavesService } from './leaves.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html'
})
export class LeavesComponent implements OnDestroy {
  leavesInfos: any[] = [];
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private leavesService: LeavesService
  ) {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('id');
          if (!id) return of([]);
          this.isLoading = true;
          return this.leavesService.getLeaveById(id);
        }),
        switchMap(apiARes => {
          const leaveName = apiARes?.ReturnData?.ReturnData?.LeaveName;
          return this.leavesService.searchLeavesByName(leaveName);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: res => {
          this.leavesInfos = res?.ReturnData?.ReturnData?.LeavesInfos ?? [];
          this.isLoading = false;
        },
        error: err => {
          console.error(err);
          this.isLoading = false;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}