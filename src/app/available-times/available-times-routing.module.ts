import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableTimesPage } from './available-times.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableTimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableTimesPageRoutingModule {}
