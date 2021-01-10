import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivesComponent } from './lives.component';

const routes: Routes = [{ path: '', component: LivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivesRoutingModule { }
