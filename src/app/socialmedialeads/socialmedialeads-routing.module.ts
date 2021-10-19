import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialmedialeadsPage } from './socialmedialeads.page';

const routes: Routes = [
  {
    path: '',
    component: SocialmedialeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialmedialeadsPageRoutingModule {}
