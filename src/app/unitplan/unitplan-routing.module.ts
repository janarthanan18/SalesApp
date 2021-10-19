import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitplanPage } from './unitplan.page';

const routes: Routes = [
  {
    path: '',
    component: UnitplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitplanPageRoutingModule {}
