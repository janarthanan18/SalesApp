import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialmediapipelinePage } from './socialmediapipeline.page';

const routes: Routes = [
  {
    path: '',
    component: SocialmediapipelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialmediapipelinePageRoutingModule {}
