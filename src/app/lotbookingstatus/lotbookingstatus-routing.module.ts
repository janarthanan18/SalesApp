import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotbookingstatusPage } from './lotbookingstatus.page';

const routes: Routes = [
  {
    path: '',
    component: LotbookingstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotbookingstatusPageRoutingModule {}
