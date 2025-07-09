import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesComponent } from './leaves/leaves.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'leaves/:id', component: LeavesComponent },
  { path: 'leaves/edit/:id', component: EditComponent },
  { path: '**', redirectTo: 'leaves/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
