import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', loadChildren: () => import('./pages/search/search.module').then( m => m.SearchModule)},
  {path: 'repos', loadChildren: () => import('./pages/repos/repos-list/repos-list.module').then( m => m.ReposListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
