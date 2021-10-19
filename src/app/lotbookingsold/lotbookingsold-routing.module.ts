import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotbookingsoldPage } from './lotbookingsold.page';

const routes: Routes = [
  {
    path: '',
    component: LotbookingsoldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotbookingsoldPageRoutingModule {}
