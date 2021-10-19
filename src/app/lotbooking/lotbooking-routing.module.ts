import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotbookingPage } from './lotbooking.page';

const routes: Routes = [
  {
    path: '',
    component: LotbookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotbookingPageRoutingModule {}
