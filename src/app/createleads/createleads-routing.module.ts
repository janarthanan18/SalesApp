import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateleadsPage } from './createleads.page';

const routes: Routes = [
  {
    path: '',
    component: CreateleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateleadsPageRoutingModule {}
