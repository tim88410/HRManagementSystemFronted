// src/app/edit/edit.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      leavesArray: this.fb.array([this.createLeaveGroup()])
    });
  }

  get leavesArray(): FormArray {
    return this.form.get('leavesArray') as FormArray;
  }

  createLeaveGroup(): FormGroup {
    return this.fb.group({
      LeaveName: ['', Validators.required],
      LeaveLimitHours: [0, [Validators.required, Validators.min(0)]],
      Description: ['']
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
