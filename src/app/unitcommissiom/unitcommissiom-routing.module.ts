import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitcommissiomPage } from './unitcommissiom.page';

const routes: Routes = [
  {
    path: '',
    component: UnitcommissiomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitcommissiomPageRoutingModule {}
