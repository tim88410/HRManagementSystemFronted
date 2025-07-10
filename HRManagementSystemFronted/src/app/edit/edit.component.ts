import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeavesService } from '../leaves/leaves.service';
import { FormValidators } from '../shared/validators/form-validators/form-validators.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private leavesService: LeavesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      leaves: this.fb.array([])
    });

    const leave = history.state.data;
    if (leave) {
      this.addFbGroupLeave(leave);
    }
  }

  get leavesArray(): FormArray {
    return this.form.get('leaves') as FormArray;
  }

  addFbGroupLeave(data: any): void {
    const group = this.fb.group({
      Id: [data.Id],
      LeaveName: [data.LeaveName || '', Validators.required],
      Description: [data.Description],
      LeaveLimitHours: [
        data.LeaveLimitHours,
        [Validators.required, FormValidators.decimalValidator]
      ],
      UserId: [data.OperateUserId || 1],
      CreateDate: [data.CreateDate]
    });
    this.leavesArray.push(group);
  }

  save(): void {
    for (const group of this.leavesArray.controls) {
      if (group.invalid) {
        group.markAllAsTouched();
        return;
      }
    }

    const payload = this.leavesArray.value[0];
    this.leavesService.updateLeave(payload).subscribe({
      next: () => this.router.navigate(['/leaves']),
      error: err => console.error(err)
    });
  }
}