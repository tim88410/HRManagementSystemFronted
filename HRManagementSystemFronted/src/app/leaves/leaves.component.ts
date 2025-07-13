import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LeavesService } from './leaves.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leavesInfos: any[] = [];
  isLoading = false;

  constructor(
    private leavesService: LeavesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchLeaves();
  }

  searchLeaves(): void {
    this.isLoading = true;
    this.leavesService.searchLeavesByName().subscribe({
      next: (res) => {
        this.leavesInfos = res?.ReturnData?.ReturnData?.LeavesInfos ?? [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching leaves:', err);
        this.isLoading = false;
      },
    });
  }

  onEdit(leave: any) {
    this.router.navigate(['/leaves/edit', leave.Id], {
      state: { data: leave }
    });
  }
}