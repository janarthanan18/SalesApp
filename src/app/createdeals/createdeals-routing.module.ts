import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatedealsPage } from './createdeals.page';

const routes: Routes = [
  {
    path: '',
    component: CreatedealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedealsPageRoutingModule {}
