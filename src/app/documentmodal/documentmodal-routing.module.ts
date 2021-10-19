import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentmodalPage } from './documentmodal.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentmodalPageRoutingModule {}
