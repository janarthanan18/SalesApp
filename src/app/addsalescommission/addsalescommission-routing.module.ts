import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsalescommissionPage } from './addsalescommission.page';

const routes: Routes = [
  {
    path: '',
    component: AddsalescommissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsalescommissionPageRoutingModule {}
