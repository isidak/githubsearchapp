import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReposListComponent} from './repos-list.component';


const routes: Routes = [
  {path: ':name', component: ReposListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposListRoutingModule { }
