import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterassignleadsPage } from './registerassignleads.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterassignleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterassignleadsPageRoutingModule {}
