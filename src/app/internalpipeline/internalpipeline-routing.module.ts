import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalpipelinePage } from './internalpipeline.page';

const routes: Routes = [
  {
    path: '',
    component: InternalpipelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalpipelinePageRoutingModule {}
