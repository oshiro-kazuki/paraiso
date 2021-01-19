import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopModule } from './top/top.module';

const routes: Routes = [
  {path: '', redirectTo: 'top', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TopModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
