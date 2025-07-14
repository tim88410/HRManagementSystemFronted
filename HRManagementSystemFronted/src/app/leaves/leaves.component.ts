// src/app/leaves/leaves.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { loadLeaves } from '../store/leaves/leaves.actions';
import { selectLeaves, selectLeavesLoading } from '../store/leaves/leaves.selectors';
import { Leaves } from './leaves.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
})
export class LeavesComponent implements OnInit {
  leaves$!: Observable<Leaves[]>;
  isLoading$!: Observable<boolean>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const page = Number(this.route.snapshot.queryParamMap.get('Page')) || 1;
    const pageLimit = Number(this.route.snapshot.queryParamMap.get('PageLimit')) || 10;

    this.store.dispatch(loadLeaves({ page, pageLimit }));

    this.leaves$ = this.store.select(selectLeaves);
    this.isLoading$ = this.store.select(selectLeavesLoading);

    this.leaves$.subscribe(data => console.log('leaves$ from store', data));
  }

  onEdit(leave: Leaves): void {
    history.pushState({ data: leave }, '', '/edit');
    location.assign('/edit');
  }
}
