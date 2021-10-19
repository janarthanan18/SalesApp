import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterassignpipelinePage } from './registerassignpipeline.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterassignpipelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterassignpipelinePageRoutingModule {}
