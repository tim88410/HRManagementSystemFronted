import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit.component';
import { LeaveNameDropdownComponent } from '../shared/leave-name-dropdown/leave-name-dropdown.component';

@NgModule({
  declarations: [
    EditComponent,
    LeaveNameDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EditComponent,
    LeaveNameDropdownComponent // 如果別的地方也需要用到
  ]
})
export class EditModule {}
