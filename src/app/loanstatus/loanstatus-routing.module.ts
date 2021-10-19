import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanstatusPage } from './loanstatus.page';

const routes: Routes = [
  {
    path: '',
    component: LoanstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanstatusPageRoutingModule {}
