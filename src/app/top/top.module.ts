import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top.component';
import { TopMainComponent } from './top.main/top.main.component';

const routes: Routes = [
  {
    path: 'top', component: TopComponent,
    children: [
      {
        path: '', component: TopMainComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    TopComponent,
    TopMainComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class TopModule { }
