import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top.component';
import { TopMainComponent } from './top.main/top.main.component';
import { ContentsDetailComponent } from './contents.detail/contents.detail.component';
import { TakeoutComponent } from './takeout/takeout.component';
import { PickupService } from '../service/pickup.service';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'top', component: TopComponent,
    children: [
      { path: '', component: TopMainComponent },
      { path: ':contentId', component: ContentsDetailComponent },
      // { path: 'takeout', component: TakeoutComponent },
    ]
  }
]


@NgModule({
  declarations: [
    TopComponent,
    TopMainComponent,
    ContentsDetailComponent,
    TakeoutComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [
    PickupService,
  ],
  bootstrap: []
})
export class TopModule { }
