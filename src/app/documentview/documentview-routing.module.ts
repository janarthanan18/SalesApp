import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentviewPage } from './documentview.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentviewPageRoutingModule {}
