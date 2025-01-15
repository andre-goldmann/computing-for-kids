import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsComponent } from './parents/parents.component';

const routes: Routes = [
  // ...existing code...
  { path: 'parents', component: ParentsComponent },
  // ...existing code...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
