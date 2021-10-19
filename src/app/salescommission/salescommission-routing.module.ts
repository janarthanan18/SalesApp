import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalescommissionPage } from './salescommission.page';

const routes: Routes = [
  {
    path: '',
    component: SalescommissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalescommissionPageRoutingModule {}
