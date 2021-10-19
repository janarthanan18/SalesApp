import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertymodalPage } from './propertymodal.page';

const routes: Routes = [
  {
    path: '',
    component: PropertymodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertymodalPageRoutingModule {}
