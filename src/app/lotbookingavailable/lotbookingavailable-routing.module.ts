import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotbookingavailablePage } from './lotbookingavailable.page';

const routes: Routes = [
  {
    path: '',
    component: LotbookingavailablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotbookingavailablePageRoutingModule {}
