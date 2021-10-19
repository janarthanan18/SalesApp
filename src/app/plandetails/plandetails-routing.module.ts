import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlandetailsPage } from './plandetails.page';

const routes: Routes = [
  {
    path: '',
    component: PlandetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlandetailsPageRoutingModule {}
