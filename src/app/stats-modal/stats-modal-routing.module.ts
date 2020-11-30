import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsModalPage } from './stats-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StatsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsModalPageRoutingModule {}
