import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadsdetailsPage } from './leadsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: LeadsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsdetailsPageRoutingModule {}
