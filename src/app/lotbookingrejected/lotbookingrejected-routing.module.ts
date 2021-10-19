import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotbookingrejectedPage } from './lotbookingrejected.page';

const routes: Routes = [
  {
    path: '',
    component: LotbookingrejectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotbookingrejectedPageRoutingModule {}
