import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsdetailsPage } from './dealsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: DealsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealsdetailsPageRoutingModule {}
