import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesComponent } from './leaves/leaves.component';

const routes: Routes = [
  { path: 'leaves/:id', component: LeavesComponent },
  { path: '**', redirectTo: 'leaves/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
