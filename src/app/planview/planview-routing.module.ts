import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanviewPage } from './planview.page';

const routes: Routes = [
  {
    path: '',
    component: PlanviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanviewPageRoutingModule {}
