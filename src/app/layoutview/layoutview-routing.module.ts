import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutviewPage } from './layoutview.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutviewPageRoutingModule {}
