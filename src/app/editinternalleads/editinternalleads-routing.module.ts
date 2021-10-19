import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditinternalleadsPage } from './editinternalleads.page';

const routes: Routes = [
  {
    path: '',
    component: EditinternalleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditinternalleadsPageRoutingModule {}
